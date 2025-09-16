"use client";
import Link from "next/link";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname, useRouter } from "next/navigation";
import { Pacifico } from "next/font/google";
import { House, FolderKanban, BookOpenText } from "lucide-react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function NavBar() {
  const currentPathname = usePathname();
  const basePath = currentPathname.split("/")[1];
  const router = useRouter();

  const handleKeyPress = (e: any) => {
    if (e.key === "h") router.push("/");
    if (e.key === "b") router.push("/blog");
    if (e.key === "p") router.push("/projects");
  };

  useEffect(() => {
    const handleKeyPressOnMount = (e: any) => handleKeyPress(e);
    document.addEventListener("keypress", handleKeyPressOnMount);
    return () => {
      document.removeEventListener("keypress", handleKeyPressOnMount);
    };
  });

  return (
    <nav className="text-sm">
      <div
        className="
    relative flex gap-1 p-1 rounded-full bg-white/6
    supports-[backdrop-filter]:backdrop-blur-xl
    ring-1 ring-white/10
    shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)]
    before:content-[''] before:absolute before:inset-0 before:rounded-full before:pointer-events-none
    before:bg-[radial-gradient(120%_100%_at_50%_-10%,rgba(255,255,255,0.16),rgba(255,255,255,0)_55%)]
    after:content-[''] after:absolute after:inset-0 after:rounded-full after:pointer-events-none
    after:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(0,0,0,0.22)]
  "
      >
        <Link
          href="/"
          className={twMerge(
            `
      relative p-3 rounded-full transition-all duration-200
      text-neutral-400 hover:text-white
      ring-1 ring-white/0 hover:ring-white/12
      bg-transparent hover:bg-white/8
      `,
            basePath === "" &&
              `
        text-white
        bg-white/10
        ring-1 ring-white/16
        shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_16px_-10px_rgba(0,0,0,0.55)]
        `
          )}
        >
          <House className="stroke-[1.5]" />
        </Link>

        <Link
          href="/projects"
          className={twMerge(
            `
      relative p-3 rounded-full transition-all duration-200
      text-neutral-400 hover:text-white
      ring-1 ring-white/0 hover:ring-white/12
      bg-transparent hover:bg-white/8
      `,
            basePath === "projects" &&
              `
        text-white
        bg-white/10
        ring-1 ring-white/16
        shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_16px_-10px_rgba(0,0,0,0.55)]
        `
          )}
        >
          <FolderKanban className="stroke-[1.5]" />
        </Link>

        <Link
          href="/blog"
          className={twMerge(
            `
      relative p-3 rounded-full transition-all duration-200
      text-neutral-400 hover:text-white
      ring-1 ring-white/0 hover:ring-white/12
      bg-transparent hover:bg-white/8
      `,
            basePath === "blog" &&
              `
        text-white
        bg-white/10
        ring-1 ring-white/16
        shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_16px_-10px_rgba(0,0,0,0.55)]
        `
          )}
        >
          <BookOpenText className="stroke-[1.5]" />
        </Link>
      </div>
    </nav>
  );
}
