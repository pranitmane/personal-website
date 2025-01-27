"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import GithubLogo from "../../../public/socialMedia/GithubLogo";

const colors = ["#1c1616", "#161a1c"];

export default function ProjectCard({
    title,
    description,
    githubLink,
    liveLink,
    techstack,
    className,
    gradient,
}: {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    techstack: string[];
    className?: string;
    gradient?: string;
}) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div
            className={twMerge(
                `flex flex-col gap-3 p-4 rounded-2xl bg-gradient-to-b from-[${randomColor}] to-[#191919]`,
                className, gradient
            )}
        >
            <h4 className="text-lg font-medium">{title}</h4>
            <div className="flex flex-row gap-3">
                {githubLink &&
                    <Link
                        key={githubLink}
                        className="flex flex-row items-center gap-1 text-hyperlink hover:text-hyperlinkHover"
                        href={githubLink}
                        onMouseEnter={() => setHoveredId("github")}
                        onMouseLeave={() => setHoveredId(null)}
                        >
                        <GithubLogo
                            size={20}
                            color={hoveredId === "github" ? "hsla(210, 100%, 75%, 1)" : "hsla(210, 100%, 85%, 1)"}
                            className="transition-transform duration-200 hover:scale-90"
                        />
                        Github
                    </Link>}
                {liveLink && <Link className="text-hyperlink hover:text-hyperlinkHover" href={liveLink}>Live</Link>}
            </div>
            <p className="text-secondaryTxt">{description}</p>
            <div className="flex flex-row flex-wrap gap-1">
                {techstack.map((tech) => (
                    <span
                        key={tech}
                        className="bg-white/5 text-tertiaryTxt text-sm p-1 px-2 rounded-lg"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
