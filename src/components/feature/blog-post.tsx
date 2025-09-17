import Link from "next/link"
import ShowDate from "./show-date"

type BlogPostProps = {
  title: string,
  date: string,
  slug: string,
}

export default function BlogPost(props: BlogPostProps) {
  return (
    <Link
      href={`/blog/${props.slug}`}
      className="w-full flex flex-row justify-between items-center">
      <h2 className="text-lg w-fit font-medium hover:text-blue-300">{props.title}</h2>
      <ShowDate className="text-neutral-300 text-sm" date={props.date} />
    </Link>
  )
}