import Link from 'next/link'
// import { GeistSans } from 'geist/font/sans'
import { twMerge } from 'tailwind-merge'
import { Oswald } from 'next/font/google'

const oswald = Oswald({ weight: "600", subsets: ["latin"] })



import ProjectCard from '../components/homePage/projectCard'
import BlogPost from '../components/blogPage/blogPost'
import Intro from '../components/homePage/intro'


const projects: Array<React.ComponentProps<typeof ProjectCard>> = [
  {
    title: 'YT Music Remote',
    githubLink: 'https://github.com/pranitmane/ytm-remote',
    description: "a chrome extension that allows you to control music from your phone.",
    techstack: ["Web-Sockets", "Chrome Extensions", "Reactjs", "Typescript"],
    gradient: 'bg-gradient-to-b from-[#1c1616] to-[#191919]',
  },
  {
    title: 'PDF to CSV using Regex',
    githubLink: 'https://github.com/pranitmane/pdf2csv-backend',
    description: "automated manual data entry work using regex, to extract keys from pdf and convert to csv.",
    techstack: ["Regex", "Expressjs", "Mongodb"],
    gradient: 'bg-gradient-to-b from-[#161a1c] to-[#191919]',
  },
]


export default async function Home() {
  const posts = [
      {
        title: 'Understanding React Hooks',
        date: '2023-10-01',
        slug: 'understanding-react-hooks',
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
        title: 'A Guide to Next.js',
        date: '2023-09-15',
        slug: 'guide-to-nextjs',
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
    ]

  return (
    <main className='flex flex-col gap-24'>
      <Intro />
      <section className='flex flex-col gap-7'>
        <div className='flex flex-row justify-between items-center'>
          <h3 className={twMerge(oswald.className, 'text-xl font-semibold')}>My Work</h3>
          <ViewAllButton href="/projects" />
        </div>
        <div className='flex flex-row flex-wrap gap-6 sm:gap-3'>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              className={'flex-1 min-w-[300px]'}
              gradient={project.gradient}
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
          <h3 className={twMerge(oswald.className, 'text-xl font-semibold')}>Latest Blogs</h3>
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
    <Link href={href} className='border border-borderPrimary bg-transparent hover:bg-borderPrimary rounded-full p-1 px-2 self-center text-sm'>View all</Link>
  )
}
