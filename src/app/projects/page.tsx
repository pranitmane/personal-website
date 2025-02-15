import ProjectCard from '@/components/feature/project-card'
import { projects } from '@/data/projects/projects'
import { Oswald } from 'next/font/google'


const oswald = Oswald({ weight: "600", subsets: ["latin"] })

export default function AboutPage() {
    return (
        <main className="flex flex-col gap-7">
            <div className={oswald.className}>
                <h1 className="font-semibold text-2xl">Projects</h1>
            </div>
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