import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Pranit Mane',
  description: 'Thoughts, ideas, and explorations.',
  
}

export default function BlogList({
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
