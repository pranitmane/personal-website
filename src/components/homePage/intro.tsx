import pranitPic1 from '../../../public/pranitPic1.jpeg';
import pranitPic2 from '../../../public/pranitPic2.png';
import Image from 'next/image';
import Link from 'next/link';
export default function IntroCard() {
    return (
        <Link
        href="/about"
         className="relative overflow-hidden group w-full rounded-lg bg-gradient-to-r from-sky-700/30 via-sky-700/5 to-sky-700/20 hover:bg-zinc-80 p-2 border border-zinc-600 flex flex-row items-center justify-center gap-2">
            <div className='absolute -rotate-6 left-[-15%] top-0 h-[120%] bg-gradient-to-r from-black/20 to-white/30 w-10 group-hover:left-[115%] transition-all duration-700 ease-in-out'>
            </div>
            <div className='h-full w-12 shrink-0 '>
            <Image placeholder='blur' layout='' width={200} height={200} className=' aspect-square object-cover bg-zinc-900 rounded border border-zinc-700' src={pranitPic2} alt="Pranit Image" />
            </div>
            <div className='flex-1'>
                <h1 className='text-lg font-semibold'>Pranit Mane</h1>
                <p className='text-zinc-300'>Computer Engineering undergrad and a <span className='font-semibold underline'>Fullstack</span> developer.</p>
            </div>
        </Link>
    )
}