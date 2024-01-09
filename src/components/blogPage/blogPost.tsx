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
      <ShowDate className="text-gray-400 text-sm" date={props.date}/>
      <h2 className="text-xl hover:underline w-fit font-semibold">{props.title}</h2>
      <div dangerouslySetInnerHTML={
        { __html: props.excerpt }
      }
      className="text-gray-300"
      >
      </div>
    </Link>
  )
}