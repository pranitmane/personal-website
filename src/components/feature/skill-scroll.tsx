"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const WORDS = ["Nextjs","Reactjs","Javascript","Typescript","Mongodb","Postgres","Supabase","Expressjs","Docker"];

// palette
const BG_TOP = "#17181d";
const BG_MID = "#0f1115";
const BG_BOTTOM = "#0b0d11";
const RING = "rgba(99,132,255,0.14)";      // soft accent glow

export default function SkillScroll({
  speedPxPerSec = 30,
  rowHeight = 20,
}: {
  speedPxPerSec?: number;
  rowHeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstListRef = useRef<HTMLDivElement>(null);

  const [containerH, setContainerH] = useState(0);
  const [listH, setListH] = useState(0);
  const [offset, setOffset] = useState(0);

  const [dragging, setDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragStartOffset = useRef(0);
  const interacting = dragging;

  const rows = [...WORDS, ...WORDS, ...WORDS];

  useLayoutEffect(() => {
    const measure = () => {
      setContainerH(containerRef.current?.getBoundingClientRect().height || 0);
      setListH(firstListRef.current?.getBoundingClientRect().height || 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (firstListRef.current) ro.observe(firstListRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      if (!interacting && listH > 0) {
        setOffset((p) => ((p + speedPxPerSec * dt) % listH + listH) % listH);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [listH, speedPxPerSec, interacting]);

  const onWheel = (e: React.WheelEvent) => {
    if (listH <= 0) return;
    setOffset((p) => ((p + e.deltaY) % listH + listH) % listH);
  };

  const startDrag = (y: number) => {
    dragStartY.current = y;
    dragStartOffset.current = offset;
    setDragging(true);
  };
  const moveDrag = (y: number) => {
    if (!dragging || listH <= 0) return;
    const dy = y - dragStartY.current;
    const next = dragStartOffset.current - dy;
    setOffset(((next % listH) + listH) % listH);
  };
  const endDrag = () => setDragging(false);

  const styleFor = (rowTopY: number) => {
    const center = containerH / 2;
    const rowCenterY = rowTopY + rowHeight / 2;
    const dNorm = Math.min(Math.abs(rowCenterY - center), center) / center;
    const smooth = (x: number) => x * x * (3 - 2 * x);
    const quant = (x: number, step = 0.02) => Math.round(x / step) * step;
    const t = 1 - smooth(quant(dNorm));
    const centerLock = Math.abs(rowCenterY - center) < 0.5;

    const scale = 0.85 + 0.4 * t;
    const alpha = centerLock ? 1 : 0.38 + 0.62 * t;  // no hard line at center
    const fontWeight = centerLock ? 800 : 600;

    return {
      transform: `scale(${scale})`,
      color: `rgba(255,255,255,${alpha})`,
      fontWeight,
      willChange: "transform",
      textShadow: "0 0 8px rgba(255,255,255,0.06)",
    } as React.CSSProperties;
  };

  return (
    <div className="inline-flex scale-75">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-full border border-neutral-800 select-none h-20 w-32 flex-none shrink-0"
        style={{
          background: `linear-gradient(${BG_TOP}, ${BG_MID} 50%, ${BG_BOTTOM})`,
          boxShadow: `
            inset 0 0 0 1px rgba(255,255,255,0.05),
            inset 0 12px 24px rgba(0,0,0,0.55),
            0 0 22px ${RING}
          `,
          cursor: dragging ? "grabbing" : "grab",
        }}
        onWheel={onWheel}
        onPointerDown={(e) => {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          startDrag(e.clientY);
        }}
        onPointerMove={(e) => moveDrag(e.clientY)}
        onPointerUp={(e) => {
          (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
          endDrag();
        }}
        onPointerCancel={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientY)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientY)}
        onTouchEnd={endDrag}
      >
        {/* soft vignette, no center line */}
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background:
              "radial-gradient(120% 60% at 50% 50%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.0) 45%, rgba(0,0,0,0.55) 100%), linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 28%, transparent 72%, rgba(0,0,0,0.55))",
        }} />

        <div className="absolute left-0 top-0 w-full" style={{ transform: `translateY(-${offset}px)` }}>
          <div ref={firstListRef}>
            {rows.map((w, i) => {
              const top = i * rowHeight;
              return (
                <Row key={`a-${i}-${w}`} word={w} rowHeight={rowHeight} style={styleFor(top - offset)} />
              );
            })}
          </div>
          <div>
            {rows.map((w, i) => {
              const top = listH + i * rowHeight;
              return (
                <Row key={`b-${i}-${w}`} word={w} rowHeight={rowHeight} style={styleFor(top - offset)} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  word,
  rowHeight,
  style,
}: {
  word: string;
  rowHeight: number;
  style: React.CSSProperties;
}) {
  return (
    <div className="w-full flex items-center justify-center" style={{ height: rowHeight }}>
      <span
        className="font-sans whitespace-nowrap tracking-tight"
        style={{
          ...style,
          transition: "transform 0.08s linear, color 0.12s linear",
          fontSize: 12,
          lineHeight: 1,
        }}
      >
        {word}
      </span>
    </div>
  );
}
