import Link from "next/link";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
    return (
        <main className="flex flex-col gap-5">
            <div className={inter.className}>
                <h2 className="font-semibold text-2xl">About Me</h2>
            </div>
            <div className='w-full flex flex-col text-gray-300'>
                <p>
                    Just another human being trying to make sense of the world. Intrested in everything from philosophy to physics, but find myself spending most of my time on the computer. I am a full stack developer, and currently trying my hand at React Native.
                </p>
                <p>
                    You can find me on X <Link className="text-sky-400 hover:underline" target="blank" href="https://x.com/pranitbmane">@pranitbmane</Link>
                </p>
            </div>
        </main>
    )
}