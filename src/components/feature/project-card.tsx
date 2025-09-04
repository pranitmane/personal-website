
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
}: {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    techstack: string[];
}) {

    return (
        <div
            className={twMerge(
                "flex-1 min-w-[300px] flex flex-col gap-3 p-4 pt-[11px] rounded-2xl bg-linear-to-br from-[#18171C] to-[#121117]"
            )}
        >
            <h4 className="text-lg font-medium">{title}</h4>
            <div className="flex flex-row gap-3">
                {githubLink && (
                    <Link
                        href={githubLink}
                        className="group flex flex-row items-center gap-1 text-hyperlink hover:text-hyperlink-hover"
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
                        className="group flex flex-row items-center gap-1 text-hyperlink hover:text-hyperlink-hover"
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
            <p className="text-secondary-txt">{description}</p>
            <div className="flex flex-row flex-wrap gap-1">
                {techstack.map((tech) => (
                    <span
                        key={tech}
                        className="bg-white/5 text-tertiary-txt text-sm p-1 px-2 rounded-lg"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
