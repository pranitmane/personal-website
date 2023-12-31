import Link from "next/link"
import ShowDate from "./showDate"

export default function BlogPost(props: { title: string, excerpt: string, date: string, slug: string, category:string}) {

  return (
    <Link 
      href={`/blogs/${props.slug}`}
      className="w-full flex flex-col transition-all">
      <h2 className="text-lg text-sky-300 font-semibold">{props.title}</h2>
      <ShowDate className="text-zinc-400 text-sm font-semibold" date={props.date}/>
      <div dangerouslySetInnerHTML={
        { __html: props.excerpt }
      }
      className="text-zinc-200"
      >
      </div>
    </Link>
  )
}