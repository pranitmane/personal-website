import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { getAllPosts } from "@/services/get-all-posts";

import ProjectCard from "@/components/feature/project-card";
import BlogPost from "@/components/feature/blog-post";
import SkillScroll from "@/components/feature/skill-scroll";
import { projects } from "@/data/projects/projects";

import { ArrowRight } from "lucide-react";

export default async function Home() {
  const allPosts = await getAllPosts();

  return (
    <main className="w-full sm:w-[640px] px-2 pt-20 pb-40   flex flex-col gap-20 ">
      <Intro />
      <section className="flex flex-col gap-7">
        <div className="flex flex-row border border-neutral-800 rounded-full py-2 px-4 justify-between items-center">
          <h3 className={twMerge("text-lg font-semibold")}>My Work</h3>
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
          <h3 className={twMerge("text-lg font-semibold")}>Recent Posts</h3>
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
      className="border hover:rotate-[360deg] transition-all duration-300 border-neutral-800 bg-neutral-800 rounded-full p-[2px] self-center text-sm text-neutral-300"
    >
      <ArrowRight size={20} />
    </Link>
  );
}

function Intro() {
  return (
    <section className="w-full flex flex-col items-center gap-10 p-4">
      <div className="flex flex-row pl-8 justify-center items-center gap-4">
        <div className="z-10">
          <p className="text-neutral-300">Hi, I am</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-100">Pranit</h1>
        </div>
        <div className="w-16 relative h-16 rotate-2 hover:rotate-0 transition-all duration-200">
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
            style={{
              objectFit: "cover",
              filter: "brightness(0.3) blur(20px)",
            }}
            sizes="40"
            fill
            priority
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <SkillScroll />
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-100">Fullstack</h1>
          <p className="text-neutral-300">developer, based in india</p>
        </div>
      </div>
    </section>
  );
}
