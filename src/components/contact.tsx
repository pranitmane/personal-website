'use client'
import {useState} from 'react'

import Link from "next/link"
import Image from "next/image"
import TwitterLogo from "../../public/socialMedia/TwitterLogo"
import GithubLogo from "../../public/socialMedia/GithubLogo"
import YoutubeLogo from "../../public/socialMedia/YoutubeLogo"
export default function ContactMe() {
    const [isHovered1,setIsHovered1] = useState(false)
    const [isHovered2,setIsHovered2] = useState(false)
    const [isHovered3,setIsHovered3] = useState(false)

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="flex-1 flex flex-row gap-5 items-center">
                {/* <div className=""> */}
                    <Link onMouseEnter={()=>{setIsHovered1(true)}} onMouseLeave={()=>{setIsHovered1(false)}} className="flex flex-row items-center gap-2 group relative" href='https://twitter.com/pranitbmane'>
                        {isHovered1?<TwitterLogo color="#7dd3fc"  size={25} />:<TwitterLogo  size={25} />}
                        {/* <div className="absolute transition-all rounded-full w-full h-full group-hover:bg-sky-400/50 scale-150 blur-sm z-[-10] " ></div> */}
                        {/* <p>Twitter</p> */}
                    </Link>
                    <Link onMouseEnter={()=>{setIsHovered2(true)}} onMouseLeave={()=>{setIsHovered2(false)}}  className="flex flex-row items-center gap-2 relative group" href='https://youtube.com/@pranitmane'>
                    {isHovered2?<YoutubeLogo color="#7dd3fc"  size={25} />:<YoutubeLogo  size={25} />}
                        {/* <div className="absolute transition-all rounded-full w-full h-full group-hover:bg-red-400/50 scale-150 blur-sm z-[-10] " ></div> */}
                        {/* <p>Youtube</p> */}
                    </Link>
                    <Link onMouseEnter={()=>{setIsHovered3(true)}} onMouseLeave={()=>{setIsHovered3(false)}} className="flex flex-row items-center gap-2 group relative" href='https://github.com/pranitmane'>
                    {isHovered3?<GithubLogo color="#7dd3fc"  size={25} />:<GithubLogo  size={25} />}
                        {/* <div className="absolute transition-all rounded-full w-full h-full group-hover:bg-violet-400/50 scale-150 blur-sm z-[-10] " ></div> */}
                        {/* <p>Github</p> */}
                    </Link>
                {/* </div> */}
            </div>

        </div>
    )
}