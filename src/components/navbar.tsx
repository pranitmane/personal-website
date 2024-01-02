"use client";

import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
import { useState, useEffect} from "react";

const styles = {
  left: "left-[2px] absolute z-10 w-[70px] h-[40px] bg-sky-700/60 rounded-lg p-2 text-center",
  center: "left-[72px] absolute z-10 w-[70px] h-[40px] bg-sky-700/60 rounded-lg p-2 text-center",
  right: "left-[142px] absolute z-10 w-[70px] h-[40px] bg-sky-700/60 rounded-lg p-2 text-center",
}

export default function NavBar() {
  const currentPathname = usePathname();
  const basePath = currentPathname.split("/")[1];
  const [animationState, setAnimationState] = useState(styles.left);
  const router = useRouter();
  
  const handleKeyPress = (e: any) => {
    if(e.key === "h"){
      router.push("/");
    }
    if(e.key === "b"){
      router.push("/blogs");
    }
    if(e.key === "n"){
      router.push("/about");
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

  useEffect(() => {
    // const basePath = currentPathname.split("/")[1];
    if (basePath === "") {
      setAnimationState(styles.left);
    } else if (basePath === "blogs") {
      setAnimationState(styles.center);
    } else if (basePath === "about") {
      setAnimationState(styles.right);
    }
  }, [basePath]);

  return (
    <nav
      className="p-[2px] drop-shadow bg-zinc-700 bg-opacity-60 backdrop-blur-sm backdrop-brightness-75 rounded-lg flex justify-between items-center text-white relative">
      <Link
        href="/"
        className={basePath === "" ? "text-white text-center w-[70px] z-20" : "text-zinc-300 hover:text-white p-2 text-center w-[70px] z-20"}
      >
        Home
      </Link>
      <Link
        href="/blogs"
        className={basePath === "blogs" ? "text-white text-center w-[70px] z-20" : "text-zinc-300 hover:text-white p-2 text-center w-[70px] z-20"}
      >
        Blogs
      </Link>
      <Link
        href="/about"
        className={basePath === "about" ? "text-white text-center w-[70px] z-20" : "text-zinc-300 hover:text-white p-2 text-center w-[70px] z-20"}
      >
        About
      </Link>
      <div className={animationState} style={
        {
          transition: "left 0.2s ease-in-out",
        }
      }>
      </div>
    </nav>
  )
}