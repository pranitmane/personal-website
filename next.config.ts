import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: false, // disable Rust MDX so JS loader can use plugins
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },

    ],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        "rehype-pretty-code",
        {
          keepBackground: false,
          theme: "one-dark-pro",
        },
      ],
      "rehype-slug",
    ],
  },
});

export default withMDX(nextConfig);
