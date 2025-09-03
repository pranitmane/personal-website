import ProjectCard from '@/components/feature/project-card'
import { projects } from '@/data/projects/projects'
import { twMerge } from 'tailwind-merge'




export default function ProjectsPage() {
    return (
        <main className="flex flex-col gap-20">
            <h1 className={twMerge("text-4xl font-semibold text-center")}>Projects</h1>
            <div className='flex flex-row flex-wrap gap-3'>
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
    )
}