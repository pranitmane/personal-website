"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const WORDS = ["Nextjs", "Reactjs", "Javascript", "Typescript","Mongodb","Postgres","Supabase","Expressjs","Docker"];

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
        setOffset((prev) => ((prev + speedPxPerSec * dt) % listH + listH) % listH);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [listH, speedPxPerSec, interacting]);

  const onWheel = (e: React.WheelEvent) => {
    if (listH <= 0) return;
    setOffset((prev) => ((prev + e.deltaY) % listH + listH) % listH);
  };

  const startDrag = (clientY: number) => {
    dragStartY.current = clientY;
    dragStartOffset.current = offset;
    setDragging(true);
  };
  const moveDrag = (clientY: number) => {
    if (!dragging || listH <= 0) return;
    const dy = clientY - dragStartY.current;
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
    const alpha = centerLock ? 1 : 0.35 + 0.65 * t;
    const fontWeight = centerLock ? 800 : 600;

    return {
      transform: `scale(${scale})`,
      color: `rgba(0,0,0,${alpha})`,
      fontWeight,
      willChange: "transform",
    } as React.CSSProperties;
  };

  return (
    <div className="inline-flex"> {/* no w-full so it does not stretch */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-full border-2 border-neutral-800 select-none h-20 w-32 flex-none shrink-0"
        style={{
          background: "linear-gradient(to bottom,#666666,#FFDD99 50%,#666666)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 10px 20px rgba(0,0,0,0.5)",
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
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

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

        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/50 blur-[0.5px] z-30" />
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
        style={{ ...style, transition: "transform 0.08s linear", fontSize: 12, lineHeight: 1 }}
      >
        {word}
      </span>
    </div>
  );
}
