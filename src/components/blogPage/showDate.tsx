import { parseISO, format } from 'date-fns'

export default function ShowDate(props: { date: string, className?: string }) {
    const newDate = parseISO(props.date)
    return (
        <div className='flex flex-row items-center gap-1'>
            <div className='w-2 h-2 bg-zinc-600 rounded-full'></div>
            <time className={props.className} dateTime={props.date}>{format(newDate, 'LLL d, yyyy')}</time>
        </div>
    )
}