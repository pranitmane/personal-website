import ShowDate from "@/components/feature/show-date"
import { notFound } from 'next/navigation'

export default async function BlogPost(data: {
    params: Promise<{
        slug: string
    }>
}) {
    type Post = {
        title: string;
        date: string;
        slug: string;
        content: string;
        categories: {
            edges: {
                node: {
                    name: string;
                };
            }[];
        };
    }|null;

    const post: Post = null as Post; // Assuming you will fetch the post data here

    if (post === null) {
        return notFound();
    }

    return (
        <main className="w-full">
            <article className="w-full flex flex-col space-y-2">
                <h1 className="">{post.title}</h1>
                <ShowDate className="text-tertiaryTxt text-sm" date={post.date} />
                <section
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="text-textSecondary post-content flex flex-col gap-5"
                ></section>
            </article>
        </main>
    );
}
