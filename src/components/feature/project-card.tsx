
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import GithubLogo from "../ui/icons/github-logo";
import LiveLogo from "../ui/icons/live-logo";

export default function ProjectCard({
    title,
    description,
    githubLink,
    liveLink,
    techstack,
    className,
}: {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    techstack: string[];
    className?: string;
}) {

    // console.log("Final className:", twMerge(
    //     "flex flex-col gap-3 p-4 pt-[11px] rounded-2xl",
    //     className
    // ));

    return (
        <div
            className={twMerge(
                "flex flex-col gap-3 p-4 pt-[11px] rounded-2xl",
                className
            )}
        >
            <h4 className="text-lg font-medium">{title}</h4>
            <div className="flex flex-row gap-3">
                {githubLink && (
                    <Link
                        href={githubLink}
                        className="group flex flex-row items-center gap-1 text-hyperlink hover:text-hyperlinkHover"
                    >
                        <GithubLogo
                            size={20}
                            className="transition-transform duration-200 group-hover:scale-90"
                            color="currentColor"
                        />
                        Github
                    </Link>
                )}
                {liveLink && (
                    <Link
                        href={liveLink}
                        className="group flex flex-row items-center gap-1 text-hyperlink hover:text-hyperlinkHover"
                    >
                        <LiveLogo
                            size={20}
                            className="transition-transform duration-200 group-hover:scale-90"
                            color="currentColor"
                        />
                        Live
                    </Link>
                )}
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
