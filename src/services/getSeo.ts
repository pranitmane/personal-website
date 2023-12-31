
type SeoData = {
    data : {
        post : {
            seo : {
                title: string
                metaDesc: string
                schema: {
                    raw: string
                }
                opengraphTitle: string
                opengraphUrl: string
                opengraphDescription: string
                opengraphType: string
                opengraphSiteName: string
                opengraphImage: {
                    mediaItemUrl: string
                }
            }
        }
    }
    
}

const getSeo = async(slug:string) => {
    const seo = await fetch("https://wp.pranitmane.com/graphql",{
        next: {
            revalidate: 60,
        },
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `query NewQuery {
                post(id: "${slug}", idType: SLUG) {
                  seo {
                    title
                    metaDesc
                    schema {
                      raw
                    }
                    opengraphTitle
                    opengraphUrl
                    opengraphDescription
                    opengraphType
                    opengraphSiteName
                    opengraphImage {
                      mediaItemUrl
                    }
                  }
                }
              }`
        })
    })
    const data : SeoData = await seo.json()
    if(!data||!data.data||!data.data.post||!data.data.post.seo){
        return null
    }
    return data.data.post.seo
}

export default getSeo