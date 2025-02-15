import { twMerge } from "tailwind-merge"
import BlogPost from "@/components/feature/blog-post"
import { Oswald } from 'next/font/google'

const oswald = Oswald({ weight: "600", subsets: ["latin"] })


export default async function BlogsPage() {
  const posts = [
    {
      node: {
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
    },
    {
      node: {
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
    },
  ]
  return (
    <main className="flex flex-col gap-24">
      <div className="flex flex-col gap-7">
        <h1 className={twMerge("text-2xl font-semibold", oswald.className)}>Blogs</h1>
        <div className="w-full flex flex-col gap-3">
          {posts.map((post) => (
            <div
              key={post.node.slug}
              className='flex flex-col gap-3'>
              <BlogPost
                title={post.node.title}
                date={post.node.date}
                slug={post.node.slug}
                category={post.node.categories.edges[0].node.name}
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
      </div>
    </main>
  )
}
