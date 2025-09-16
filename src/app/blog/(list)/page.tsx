import BlogPost from "@/components/feature/blog-post";
import { getAllPosts } from "@/services/get-all-posts";
import Image from "next/image";
import Pricedown from "next/font/local";

const pricedown = Pricedown({
  src: "../../../../public/fonts/Pricedown.otf",
  variable: "--font-pricedown",
  display: "swap",
});

export default async function BlogPage() {
  // fetch posts
  const allPosts = await getAllPosts();

  return (
    <main className="w-full sm:w-[640px] px-2 pt-20 pb-40 flex flex-col gap-20">
      <div className="absolute w-full h-72 top-0 left-0 -z-20">
        <Image
          src="/gtabg.jpeg"
          alt="Blog Page"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute w-full h-72 top-0 left-0 -z-10 bg-gradient-to-b  from-black/20 to-black"></div>

      <h1 className="mx-auto font-[pricedown] font-bold text-5xl">Blog</h1>
      <div className="w-full flex flex-col gap-3">
        <div
          className="w-full h-px bg-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, transparent, transparent 5px, #404040 4px, #404040 10px)",
          }}
        ></div>
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
    </main>
  );
}
