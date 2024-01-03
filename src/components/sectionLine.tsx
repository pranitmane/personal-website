export default function SectionLine(props:{
    section:string
}){
    return (
        <div className='flex flex-row items-center justify-center '>
            <div className=' bg-gradient-to-r from-zinc-600 to-zinc-600  w-full rounded-full h-[1px]'></div>
            <h2 className="border border-zinc-600 rounded-full p-1 text-center min-w-fit bg-sky-600/20 pl-2 pr-2">{props.section}</h2>
            <div className=' bg-gradient-to-l from-zinc-600 to-zinc-600  w-full rounded-full h-[1px]'></div>
        </div>
    )
}