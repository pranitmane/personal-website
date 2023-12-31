import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs | Pranit Mane',
  description: 'Blogs on Technology, Programming, and Life.',
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
