import { promises as fs } from "fs";
import path from "path";

type Post = {
  title: string;
  date: string;
  slug: string;
  description?: string;
  draft?: boolean;
};

export async function getAllPosts() {
  const posts: Post[] = [];
  const cwd = process.cwd();
  const postsDirectory = path.join(cwd, "src/app/blog/(posts)");

  try {
    const entries = await fs.readdir(postsDirectory, { withFileTypes: true });
    const subdirs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

    for (const subdir of subdirs) {
      try {
        const metadataPath = path.join(postsDirectory, subdir, "metadata.json");
        const file = await fs.readFile(metadataPath, "utf-8");
        const metadata = JSON.parse(file);
        posts.push({ slug: subdir, ...metadata });
      } catch (error) {
        console.error(`Error reading metadata for post ${subdir}:`, error);
      }
    }
  } catch (err) {
    console.error("Error reading posts directory:", err);
  }

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredPosts = posts.filter((post) => !post.draft);

  return filteredPosts;
}
