import ProjectCard from "@/components/feature/project-card"

interface ProjectCardProps extends React.ComponentProps<typeof ProjectCard> {
  featured?: boolean;
}

export const projects: Array<ProjectCardProps> = [
  {
    "title": "YT Music Remote",
    "githubLink": "https://github.com/pranitmane/ytm-remote",
    "description": "a chrome extension that allows you to control music from your phone.",
    "techstack": ["Web-Sockets", "Chrome Extensions", "Reactjs", "Typescript"],
    "featured": true,
  },
  {
    "title": "PDF to CSV using Regex",
    "githubLink": "https://github.com/pranitmane/pdf2csv-backend",
    "description": "automated manual data entry work using regex, to extract keys from pdf and convert to csv.",
    "featured": true,
    "techstack": ["Regex", "Expressjs", "Mongodb"],
  },
  {
    "title": "Blog Website",
    "githubLink": "https://github.com/pranitmane/personal-website",
    "liveLink": "https://pranitmane.com",
    "description": "a blog website built using nextjs and mdx.",
    "featured": true,
    "techstack": ["Nextjs", "MDX"],
  },
  {
    "title": "Scripts and Snippets",
    "githubLink": "https://github.com/pranitmane/custom-scripts",
    "description": "collection of useful scripts that I use in my day to day life.",
    "techstack": ["Shell Scripts", "Automation"],
  },
  {
    "title": "Calculator App",
    "githubLink": "https://github.com/pranitmane/calculator-by-pranit",
    "description": "built an android app with react-native and expo.",
    "techstack": ["Expo", "React Native"],
  }
]; 
