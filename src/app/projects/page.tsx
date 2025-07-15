import ProjectCard from '@/components/feature/project-card'
import { projects } from '@/data/projects/projects'
import { Oswald } from 'next/font/google'
import { twMerge } from 'tailwind-merge'


const oswald = Oswald({ weight: "600", subsets: ["latin"] })

export default function AboutPage() {
    return (
        <main className="flex flex-col gap-20">
            <h1 className={twMerge("text-4xl font-semibold text-center", oswald.className)}>Projects 🛠️</h1>
            <div className='flex flex-row flex-wrap gap-3'>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.className}
                        className={`flex-1 min-w-[300px] ${project.className}`}
                        title={project.title}
                        description={project.description}
                        techstack={project.techstack}
                        githubLink={project.githubLink}
                        liveLink={project.liveLink}
                    />
                ))}
            </div>
        </main>
    )
}