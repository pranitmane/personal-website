import ProjectCard from "@/components/feature/project-card";
import { projects } from "@/data/projects/projects";
import Image from "next/image";
import Pricedown from "next/font/local";

const pricedown = Pricedown({
  src: "../../../public/fonts/Pricedown.otf",
  variable: "--font-pricedown",
  display: "swap",
});

export default function ProjectsPage() {
  return (
    <main className="w-full px-2 pt-20 pb-40 sm:w-[640px] flex flex-col gap-20">
      <div className="absolute w-full h-72 top-0 left-0 -z-20">
        <Image
          src="/oldvibe.png"
          alt="Projects Page"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute w-full h-72 top-0 left-0 -z-10 bg-gradient-to-b  from-black/20 to-black"></div>

      <h1 className="mx-auto font-[pricedown] font-bold text-5xl">Projects</h1>
      <div className="flex flex-row flex-wrap gap-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techstack={project.techstack}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </main>
  );
}

// <div className="absolute w-full h-72 top-0 left-0 -z-10">
//   {/* Linear base */}
//   <div className="absolute inset-0 bg-gradient-to-b from-yellow-700/90 to-black"></div>
//   {/* Soft radial glow */}
//   <div className="absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(255,200,0,0.25),transparent_70%)]"></div>
// </div>;
