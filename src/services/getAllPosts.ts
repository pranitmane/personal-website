export type Post = {
    node: {
        title: string
        slug: string
        date: string
        excerpt: string
        categories: {
            edges: {
                node: {
                    name: string
                }
            }[]
        }
    }
}

type Posts = {
    data : {
        posts: {
            edges: Post[]
        }
    }
}


const getAllPosts = async () => {
    const posts = await fetch("https://wp.pranitmane.com/graphql", {
        next: {
            revalidate: 30,
        },
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
        query MyQuery {
          posts {
            edges {
              node {
                title
                slug
                date
                excerpt
                categories {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
        `,
        }),
    }
    )
    const data : Posts = await posts.json()
    return data.data.posts.edges
}

export default getAllPosts
