export default function SectionLine(props:{
    section:string
}){
    return (
        <div className='flex flex-row items-center z-10'>
            {/* <div className='w-full rounded-full bg-gray-600 h-[1px]'></div> */}
            <h2 className="border border-gray-600/30 rounded-full p-1 text-center min-w-fit bg-gray-600/30 pl-2 pr-2 relative group overflow-hidden">{props.section}
            <div className="absolute -rotate-6 left-[-20%] top-0 h-[120%] bg-gradient-to-r from-black/20 to-white/30 w-5 group-hover:left-[115%] transition-all duration-500 ease-in-out"></div>
            </h2>
            <div className='w-full rounded-full bg-gray-600/30 h-[2px]'></div>
        </div>
    )
}