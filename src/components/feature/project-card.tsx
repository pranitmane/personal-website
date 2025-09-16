import { twMerge } from "tailwind-merge";
import Link from "next/link";
import GithubLogo from "../ui/icons/github-logo";
import LiveLogo from "../ui/icons/live-logo";
import { ExternalLink, Github } from "lucide-react";

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
        "flex-1 min-w-[300px] flex flex-col gap-3 p-4 pt-[11px] rounded-2xl bg-linear-to-br from-[#18171C]/70 to-[#121117]/70"
      )}
    >
      <div className="flex flex-row justify-between">
        <h4 className="text-lg font-medium">{title}</h4>
        <div className="w-fit flex flex-row gap-2">
          {githubLink && (
            <Link
              href={githubLink}
            >
              <Github size={20}/>
            </Link>
          )}
          {liveLink && (
            <Link
              href={liveLink}
            >
              <ExternalLink size={20}/>
            </Link>
          )}
        </div>
      </div>
      <p className="text-secondary-txt">{description}</p>
      <div className="flex flex-row flex-wrap gap-1">
        {techstack.map((tech) => (
          <span
            key={tech}
            className="bg-white/5 text-tertiary-txt text-xs p-1 px-3 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

{
  /* <LiveLogo
  size={20}
  className="transition-transform duration-200 group-hover:scale-90"
  color="currentColor"
/>; */
}
