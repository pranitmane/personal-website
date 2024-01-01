import ProjectCard from '../components/homePage/projectCard'
import BlogPost from '../components/blogPage/blogPost'
import getLatestPosts from '@/services/getLatestPosts'
import IntroCard from '../components/homePage/intro'
import Link from 'next/link'
import { Inter } from 'next/font/google'

import NodejsIcon from '../../public/projects/techstack/nodejsIcon'
import MongodbIcon from '../../public/projects/techstack/mongodbIcon'
import ReactIcon from '../../public/projects/techstack/reactIcon'
import TypescriptIcon from '../../public/projects/techstack/typescriptIcon'
import NextjsIcon from '../../public/projects/techstack/nextjsIcon'
import GraphqlIcon from '../../public/projects/techstack/graphqlIcon'

import pdf2csvImage from '../../public/projects/pdf2csvImage.png'
import blogProject from '../../public/projects/blogProject.jpeg'
import todolistAi from '../../public/projects/todolistAi.jpeg'
import React from 'react'


const inter = Inter({ subsets: ["latin"] });


export default async function Home() {
  const posts = await getLatestPosts()

  return (
    <main className='flex flex-col gap-10'>
      <section>
        <IntroCard/>
      </section>
      <section className='flex flex-col gap-5'>
        <div className={inter.className}>
          <h2 className="text-xl font-semibold">Latest Articles</h2>
        </div>
        <div className="w-full flex flex-col gap-5">
          {posts.map((post) => (
            <div
              key={post.slug}
              className='hover:scale-[1.01] transition-all ease-in-out'>
              <BlogPost
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                category={post.categories.edges[0].node.name}
              />
            </div>
          ))}
          <Link
            href="/blogs"
            className="w-fit rounded-full p-2 text-sky-300 flex flex-col hover:bg-zinc-800 transition-all">
            show more
          </Link>
        </div>
      </section>
      <section className='flex flex-col gap-5'>
        <div className={inter.className}>
          <h2 className='text-xl font-semibold'>Some of My Projects</h2>
        </div>
        <ProjectCard title='Todo List generator using gpt-3.5' techstack={[<NodejsIcon key={0} size={20} />, <ReactIcon key={1} size={20} />, <MongodbIcon key={2} size={20} />]} description="Give it a prompt as the description of goal you want to achieve and it gives you the list of actionable Todo's, I am using Nodejs on the backend and ReactJs on frontend. The Todo's and user details are stored in Mongodb database." image={todolistAi} liveOrGithubLink='https://github.com/pranitmane/#' linkType='Github'></ProjectCard>
        <ProjectCard title='PDF To CSV using Regex' techstack={[<NodejsIcon key={0} size={20} />, <MongodbIcon key={1} size={20} />]} description='In response to a college challenge, we developed a solution for streamlined data entry. Our method involves extracting key information from PDFs, utilizing Regex for pattern recognition, and converting the data into a neat JSON object. This can then be effortlessly transformed into a CSV file, ensuring efficient and automated data management.' image={pdf2csvImage} liveOrGithubLink='https://github.com/pranitmane/pdf2csv-backend' linkType='Github'></ProjectCard>
        <ProjectCard title='A Blog website' techstack={[<NextjsIcon key={0} size={20} />, <ReactIcon key={1} size={20} />,<TypescriptIcon key={2} size={20}/>,<GraphqlIcon key={3} size={20}/>]} description="Fast and Scalable blog website made using Nextjs with Wordpress as headless CMS. It uses GraphQL and on demand revalidation introduced in nextjs 14" image={blogProject} liveOrGithubLink="https://pranitmane.com/blogs" linkType="Live"></ProjectCard>
      </section>
    </main>
  )
}
