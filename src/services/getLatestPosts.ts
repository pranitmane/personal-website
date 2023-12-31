type Post = {
    title: string
    date: string
    excerpt: string
    slug: string
    categories: {
        edges: {
            node: {
                name: string
            }
        }[]
    }
}

type Posts = {
    data: {
        posts: {
            nodes: Post[]
        }
    }
}



const getLatestPosts = async () => {
    const posts = await fetch("https://wp.pranitmane.com/graphql", {
        next: {
            revalidate: 25
        },
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
            query MyQuery {
                posts(first: 4, where: {orderby: {field: DATE, order: DESC}}) {
                  nodes {
                    title
                    date
                    excerpt
                    slug
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
            `
        })

    })
    const data:Posts = await posts.json();
    return data.data.posts.nodes;
};

export default getLatestPosts;