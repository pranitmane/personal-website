import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
