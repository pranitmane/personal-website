import pranitPic1 from '../../../public/pranitPic1.jpeg';
import Image from 'next/image';
import Link from 'next/link';
export default function IntroCard() {
    return (
        <Link
        href="/about"
         className="relative overflow-hidden group w-full rounded-lg bg-gradient-to-r from-sky-700/30 via-sky-700/5 to-sky-700/20 hover:bg-zinc-80 p-2 border border-zinc-600 flex flex-row items-center justify-center gap-5">
            <div className='absolute -rotate-6 left-[-15%] top-0 h-[120%] bg-gradient-to-r from-black/20 to-white/30 w-10 group-hover:left-[115%] group-hover:-rotate-12 transition-all duration-700 ease-in-out'>

            </div>
            <Image placeholder='blur' layout='' width={200} height={200} className='w-[50px] h-[50px] object-cover bg-sky-900 rounded-full border border-zinc-700' src={pranitPic1} alt="Pranit Image" />
            <div className='flex-1'>
                <h1 className='text-lg font-semibold'>Hi, I'm Pranit.</h1>
                <p className='text-zinc-200'>Computer Engineering undergrad and a <span className='font-semibold text-green-300'>Fullstack</span> developer.</p>
            </div>
        </Link>
    )
}