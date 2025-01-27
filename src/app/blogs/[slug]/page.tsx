import getSinglePost from "@/services/getSinglePost"
import Link from "next/link"
import ShowDate from "@/components/blogPage/showDate"


export default async function BlogPost(data: {
    params: {
        slug: string
    }
}) {

    const post = await getSinglePost(data.params.slug)
    if (!post) {
        return (
            <main className="justify-center flex flex-col items-center">
                <div className="w-full p-2  flex flex-row gap-5 items-center justify-center">
                    <h1 className="text-2xl font-bold">404</h1>
                    <h2 className="text-xl p-2 font-bold  border-l-2 border-borderPrimary">Post not found</h2>
                </div>
                <p className="flex flex-row gap-1">Go back to
                    <span>
                        <Link className="text-sky-400" href="/blogs">
                            blogs
                        </Link>
                    </span>
                </p>
            </main>
        )
    }
    return (
        <main className="w-full">
            <article className="w-full flex flex-col space-y-2 ">
                <h1 className="">{post.title}</h1>
                <ShowDate className="text-tertiaryTxt text-sm" date={post.date} />
                <section dangerouslySetInnerHTML={
                    { __html: post.content }
                } className="text-textSecondary post-content flex flex-col gap-5"></section>
            </article>
        </main>
    )
}


