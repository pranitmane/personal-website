"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, FolderKanban, BookOpenText } from "lucide-react";

export default function NavBar() {
  const base = usePathname().split("/")[1];

  const tabs = [
    { href: "/", key: "home", match: base === "", Icon: House },
    {
      href: "/projects",
      key: "projects",
      match: base === "projects",
      Icon: FolderKanban,
    },
    { href: "/blog", key: "blog", match: base === "blog", Icon: BookOpenText },
  ];

  // More precise calculation - adjust these values based on actual rendering
  const buttonWidth = 48; // p-3 creates 48px buttons
  const gapWidth = 4;     // gap-1 creates 4px gaps
  const spacing = buttonWidth + gapWidth;
  
  const activeIndex = tabs.findIndex(tab => tab.match);
  const pillTransform = activeIndex >= 0 ? `translateX(${activeIndex * spacing}px)` : 'translateX(0px)';

  return (
    <nav className="text-sm">
      <div
        className="
          relative z-0 flex gap-1 p-1 rounded-full bg-white/6
          supports-[backdrop-filter]:backdrop-blur-xl ring-1 ring-white/10
          shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)]
        "
      >
        {/* Background pill */}
        <div
          className="absolute top-1 left-1 w-12 h-12 z-10 rounded-full bg-white/10 ring-1 ring-white/16
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_16px_-10px_rgba(0,0,0,0.55)]
                     transition-transform duration-300 ease-out"
          style={{ 
            transform: pillTransform,
            opacity: activeIndex >= 0 ? 1 : 0
          }}
        />

        {tabs.map(({ href, key, match, Icon }) => (
          <div key={key} className="relative">
            <Link
              href={href}
              className="relative z-20 block p-3 rounded-full
                         text-neutral-400 hover:text-white
                         ring-1 ring-white/0 hover:ring-white/12
                         transition-colors duration-200"
            >
              <Icon 
                className={`transition-colors duration-200 ${
                  match ? "text-white" : ""
                }`} 
              />
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}