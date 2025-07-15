import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Oswald } from 'next/font/google'

const oswald = Oswald({ weight: "600", subsets: ["latin"] })

import ProjectCard from '@/components/feature/project-card'
import BlogPost from '@/components/feature/blog-post'
import { projects } from '@/data/projects/projects'


export default async function Home() {
  type Post = {
    title: string;
    date: string;
    slug: string;
    categories: {
      edges: {
        node: {
          name: string;
        };
      }[];
    };
  };

  const posts: Post[] = [
    {
      title: 'What do i plan to write here?',
      date: '2024-01-23',
      slug: 'what-do-i-plan-to-write-here',
      categories: {
        edges: [
          {
            node: {
              name: 'React',
            },
          },
        ],
      },
    },
    {
      title: 'Developer trying to design',
      date: '2024-01-03',
      slug: 'developer-trying-to-design',
      categories: {
        edges: [
          {
            node: {
              name: 'Next.js',
            },
          },
        ],
      },
    },
  ];

  return (
    <main className='flex flex-col gap-20'>
      <Intro />
      <section className='flex flex-col gap-7'>
        <div className='flex flex-row justify-between items-center'>
          <h3 className={twMerge(oswald.className, 'text-2xl font-semibold')}>My Work</h3>
          <ViewAllButton href="/projects" />
        </div>
        <div className='flex flex-row flex-wrap gap-3'>
          {projects.filter(project => project.featured).map((project) => (
            <ProjectCard
              key={project.title}
              className={twMerge('flex-1 min-w-[300px] ', project.className)}
              title={project.title}
              description={project.description}
              techstack={project.techstack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </section>
      <section className='flex flex-col gap-7'>
        <div className='flex flex-row justify-between items-center'>
          <h3 className={twMerge(oswald.className, 'text-2xl font-semibold')}>Latest Blogs</h3>
          <ViewAllButton href="/blogs" />
        </div>
        <div className="w-full flex flex-col gap-3">
          {posts.map((post) => (
            <div
              key={post.slug}
              className='flex flex-col gap-3'>
              <BlogPost
                title={post.title}
                date={post.date}
                slug={post.slug}
                category={post.categories.edges[0].node.name}
              />
              <div
                className="w-full h-[1px] bg-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 5px, #404040 4px, #404040 10px)',
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function ViewAllButton({ href }: { href: string }) {
  return (
    <Link href={href} className='border border-borderPrimary bg-transparent hover:bg-borderPrimary rounded-full p-[2px] px-2 self-center text-sm text-secondaryTxt'>View all</Link>
  )
}

function Intro() {
  return (
    <section className="w-full flex flex-col gap-1 justify-center" >
      <h1 className="text-xl">Hi, I am <span className="text-highlightTxt">Pranit</span></h1>
      <h2 className="text-3xl font-bold">
        I build <span className="text-highlightTxt">Full-stack</span> apps
      </h2>
      <p className="" >
        I am passionate about building scalable software that solves real-world problems. I have worked on a variety of projects, including <span className="text-highlightTxt">Apps, Websites, Chrome extensions,</span> and automation scripts.
      </p>
      <p className="" >
        Currently, I am exploring <span className="text-highlightTxt">System design & DevOps</span> and enjoy sharing my learnings through blogs and on X.
      </p>
    </section>
  )
}
