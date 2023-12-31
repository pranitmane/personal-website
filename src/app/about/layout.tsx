import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Pranit Mane',
  description: 'Software engineer, Fullstack developer, and a student.',
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
