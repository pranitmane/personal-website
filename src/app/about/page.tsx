import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full px-2 pt-20 pb-40 sm:w-[640px] flex flex-col gap-20">
      <div className="absolute w-full h-96 top-0 left-0 -z-20">
        <Image
          src="https://picsum.photos/id/43/1280/831"
          alt="Projects Page"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className="absolute w-full h-96 top-0 left-0 -z-10 bg-gradient-to-b  from-black/20 to-black"></div>
      <h1 className="mx-auto font-[var(--font-geist-sans)] font-bold text-transparent text-5xl sm:text-6xl tracking-tight [-webkit-text-stroke:1px_white] [text-stroke:1px_white]">
        About Me
      </h1>
      <p>Hello World 🌍</p>
    </main>
  );
}

