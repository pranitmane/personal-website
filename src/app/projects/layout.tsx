import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Pranit Mane',
  description: 'Projects I have worked on',
}

export default function AboutLayout({
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
