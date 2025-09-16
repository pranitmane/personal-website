// next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import type { PluggableList } from "unified";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [] as unknown as PluggableList,
    rehypePlugins: (
      [
        ["rehype-pretty-code", { keepBackground: false, theme: "one-dark-pro" }],
        "rehype-slug",
      ] as unknown
    ) as PluggableList, // cast to satisfy TS while keeping strings for serialization
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: false, // webpack + mdx-js loader so JS rehype plugins run
  },
};

export default withMDX(nextConfig);
