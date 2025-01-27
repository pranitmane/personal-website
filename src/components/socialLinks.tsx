'use client'
import { useState } from 'react'
import Link from "next/link"
import TwitterLogo from "../../public/socialMedia/TwitterLogo"
import GithubLogo from "../../public/socialMedia/GithubLogo"
import YoutubeLogo from "../../public/socialMedia/YoutubeLogo"

const socialLinks = [
    {
        href: 'https://github.com/pranitmane',
        Icon: GithubLogo,
        id: 'github',
        label: 'GitHub'
    },
    {
        href: 'https://twitter.com/pranitbmane',
        Icon: TwitterLogo,
        id: 'twitter',
        label: 'Twitter'
    },
    {
        href: 'https://youtube.com/@pranitmane',
        Icon: YoutubeLogo,
        id: 'youtube',
        label: 'YouTube'
    }
]

export default function SocialLinks() {
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    return (
        <div className="flex flex-row gap-5 items-center justify-center">
            {socialLinks.map(({ href, Icon, id, label }) => (
                <a
                    key={id}
                    href={href}
                    className="flex flex-row items-center gap-2 group relative transition-colors"
                    onMouseEnter={() => setHoveredId(id)}
                    onMouseLeave={() => setHoveredId(null)}
                    aria-label={label}
                    target='_blank' 
                >
                    <Icon
                        size={25}
                        color={hoveredId === id ? "hsla(0, 0%,75%, 1)" : "hsla(0, 0%,85%, 1)"}
                        className="transition-transform duration-200 hover:scale-90"
                    />
                </a>
            ))}
        </div>
    )
}