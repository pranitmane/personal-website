// import { GeistSans } from "geist/font/sans";
import {Oswald} from 'next/font/google'

const oswald = Oswald({weight:"600",subsets: ["latin"]})

export default function AboutPage() {
    return (
        <main className="flex flex-col gap-7">
            <div className={oswald.className}>
                <h1 className="font-semibold text-2xl">Projects</h1>
            </div>
        </main>
    )
}