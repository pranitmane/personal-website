import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { getAllPosts } from "@/services/get-all-posts";

import ProjectCard from "@/components/feature/project-card";
import BlogPost from "@/components/feature/blog-post";
import SkillScroll from "@/components/feature/skill-scroll";
import { projects } from "@/data/projects/projects";

export default async function Home() {
  const allPosts = await getAllPosts();

  return (
    <main className="w-full sm:w-[640px] px-2 pt-20 pb-40   flex flex-col gap-20 ">
      <Intro />
      <section className="flex flex-col gap-7">
        <div className="flex flex-row border border-neutral-800 rounded-full py-2 px-4 justify-between items-center">
          <h3 className={twMerge("text-2xl font-semibold")}>My Work</h3>
          <ViewAllButton href="/projects" />
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
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
      </section>
      <section className="flex flex-col gap-7">
        <div className="flex flex-row border border-neutral-800 rounded-full py-2 px-4 justify-between items-center">
          <h3 className={twMerge("text-2xl font-semibold")}>Recent Posts</h3>
          <ViewAllButton href="/blog" />
        </div>
        <div className="w-full flex flex-col gap-3 px-4">
          {allPosts.map((post) => (
            <div key={post.slug} className="flex flex-col gap-3">
              <BlogPost
                title={post.title}
                date={post.date || "1/1/1"}
                slug={post.slug}
              />
              <div
                className="w-full h-px bg-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, transparent, transparent 5px, #404040 4px, #404040 10px)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ViewAllButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="border border-border-primary bg-transparent hover:bg-border-primary rounded-full p-[2px] px-2 self-center text-sm text-secondary-txt"
    >
      View all
    </Link>
  );
}

function Intro() {
  return (
    <section className="w-full flex flex-col gap-10 justify-center">
      <div className="flex flex-row justify-center items-center gap-4 w-full">
        <div className="z-10">
          <p>Hi, I am</p>
          <h1 className="text-5xl font-bold">Pranit</h1>
        </div>
        <div className="w-20 relative h-20 rotate-3 ">
          <Image
            src="/me/1.png"
            alt="Pranit"
            className="rounded-lg border-neutral-600 border-2"
            style={{ objectFit: "cover" }}
            sizes="40"
            fill
            priority
          />
          <Image
            src="/me/1.png"
            alt="Pranit"
            className="absolute scale-200 -z-10 pointer-events-none"
            style={{ objectFit: "cover", filter: "brightness(0.3) blur(20px)" }}
            sizes="40"
            fill
            priority
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 w-full">
        <SkillScroll />
        <div>
          <h1 className="text-5xl font-bold">fullstack</h1>
          <p>developer, based in india</p>
        </div>
      </div>
    </section>
  );
}
