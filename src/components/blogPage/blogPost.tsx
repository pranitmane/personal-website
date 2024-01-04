import Link from "next/link"
import ShowDate from "./showDate"

type BlogPostProps = {
  title: string,
  excerpt: string,
  date: string,
  slug: string,
  category:string
}

export default function BlogPost(props: BlogPostProps) {


  return (
    <Link 
      href={`/blogs/${props.slug}`}
      className="w-full flex flex-col transition-all">
      <ShowDate className="text-zinc-400 text-sm" date={props.date}/>
      <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-300 w-fit font-semibold">{props.title}</h2>
      <div dangerouslySetInnerHTML={
        { __html: props.excerpt }
      }
      className="text-zinc-300"
      >
      </div>
    </Link>
  )
}