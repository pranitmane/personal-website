"use client";
import Link from "next/link";
import { useEffect } from "react";
import { twMerge } from 'tailwind-merge'
import { usePathname, useRouter } from "next/navigation";
import { Pacifico } from "next/font/google";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});


export default function NavBar() {
  const currentPathname = usePathname();
  const basePath = currentPathname.split("/")[1];
  const router = useRouter();

  const handleKeyPress = (e: any) => {
    if (e.key === "h") {
      router.push("/");
    }
    if (e.key === "b") {
      router.push("/blogs");
    }
    if (e.key === "p") {
      router.push("/projects");
    }
  }

  useEffect(() => {
    const handleKeyPressOnMount = (e: any) => {
      handleKeyPress(e);
    };
    document.addEventListener("keypress", handleKeyPressOnMount);
    return () => {
      document.removeEventListener("keypress", handleKeyPressOnMount);
    };
  });

  return (
    <nav className="w-full sm:w-[640px] text-sm flex justify-between">
      <p className={pacifico.className}>Pranit</p>
      <div className="flex gap-3">
        <Link href="/" className={twMerge("text-secondaryTxt hover:text-hyperlinkHover", basePath === "" ? "text-hyperlinkHover underline underline-offset-2" : "")}>
          home
        </Link>
        <Link href="/projects" className={twMerge("text-secondaryTxt hover:text-hyperlinkHover", basePath === "projects" ? "text-hyperlinkHover underline underline-offset-2" : "")}>
          projects
        </Link>
        <Link href="/blogs" className={twMerge("text-secondaryTxt hover:text-hyperlinkHover", basePath === "blogs" ? "text-hyperlinkHover underline underline-offset-2" : "")}>
          blogs
        </Link>
      </div>
    </nav>
  )
}