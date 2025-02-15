import Link from "next/link"
import ShowDate from "./show-date"

type BlogPostProps = {
  title: string,
  date: string,
  slug: string,
  category:string
}

export default function BlogPost(props: BlogPostProps) {

  return (
    <Link 
      href={`/blogs/${props.slug}`}
      className="w-full flex flex-row justify-between items-center">
      <h2 className="text-lg w-fit font-medium hover:text-hyperlinkHover">{props.title}</h2>
      <ShowDate className="text-tertiaryTxt text-sm" date={props.date}/>
    </Link>
  )
}