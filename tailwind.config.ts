import type { Config } from 'tailwindcss'
const defaultGradient = "bg-linear-to-br from-[#000000] to-[#ffffff]";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    "bg-linear-to-br from-[#231A1A] to-[#171111]",
    "bg-linear-to-br from-[#171C1A] to-[#191919]",
    "bg-linear-to-br from-[#18171C] to-[#121117]",
    "bg-linear-to-br from-[#1C1C17] to-[#191919]",
    defaultGradient
  ],
  theme: {
    extend: {
      colors:{
        primary:'var(--bg-primary)',
        primaryTxt:'var(--text-primary)',
        secondaryTxt:'var(--text-secondary)',
        tertiaryTxt:'var(--text-tertiary)',
        hyperlink:'var(--text-hyperlink)',
        hyperlinkHover:'var(--text-hyperlink-hover)',
        highlightTxt:'var(--text-highlight)',
        borderPrimary:'var(--border-primary)', 
      }
    },
  },
  plugins: [],
}
export default config
