import { Metadata, ResolvedMetadata, ResolvingMetadata } from "next";
import getSeo from "@/services/getSeo";


type Props = {
    params: { slug: string }
  }
   
  export async function generateMetadata(
    { params}: Props,
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug
   
    // fetch data
    const product = await getSeo(slug)

    if (!product) {
        return {
            title: '404',
            description: 'Page not found',
        }
    }
   
    // optionally access and extend (rather than replace) parent metadata

   
    return {
      title: product.title,
      description: product.metaDesc,
      openGraph: {
        title: product.opengraphTitle,
        description: product.opengraphDescription,
        images:[
            {
                url:product.opengraphImage?.mediaItemUrl
            }
        ]
      },
    }
  }
  



export default function BlogsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      {children}
      </>
    )
  }