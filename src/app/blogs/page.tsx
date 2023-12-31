import BlogPost from "@/components/blogPage/blogPost"
import getAllPosts from "@/services/getAllPosts"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export default async function BlogsPage() {
  const posts = await getAllPosts()
  return (
    <main className="flex flex-col gap-5">
      <div className={inter.className}>
      <h1 className="text-2xl font-semibold">My Blogs</h1>
      </div>
      <div className="w-full gap-5 flex flex-col">
        {/* <hr className="border border-zinc-600 " /> */}
        {posts.map((post) => (
          <div 
          key = {post.node.slug}
          className="hover:scale-[1.01] transition-all ease-in-out">
            <BlogPost
              title={post.node.title}
              date={post.node.date}
              excerpt={post.node.excerpt}
              slug={post.node.slug}
              category={post.node.categories.edges[0].node.name}
            />
          </div>
        ))}
      </div>
    </main>
  )
}
