type PostContent = {
    data: {
        post: {
            title: string
            date: string
            content: string
        } | null
    }
}

const getSinglePost = async (slug:string) => {

    const post = await fetch("https://wp.pranitmane.com/graphql", {
        next: {
            revalidate: 35,
        },
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query:`query getPostBySlug {
                post(id: "${slug}", idType: SLUG) {
                  title(format: RENDERED)
                  date
                  content
                }
              }`,
        })
    })
    const data : PostContent = await post.json()

    return data.data.post

}

export default getSinglePost