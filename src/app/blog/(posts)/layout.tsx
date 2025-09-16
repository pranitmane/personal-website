export default function BlogView({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="w-full px-2 pt-20 pb-40 sm:w-[640px] prose prose-pre:bg-gray-900 prose-blockquote:bg-gray-900 dark:prose-invert prose-code:before:hidden prose-code:after:hidden prose-code:bg-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-pink-600 ">
      {children}
    </article>
  )
}