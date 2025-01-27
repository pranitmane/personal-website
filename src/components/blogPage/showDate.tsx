import { parseISO, format } from 'date-fns'

export default function ShowDate(props: { date: string, className?: string }) {
    const newDate = parseISO(props.date)
    return (
        <time className={props.className} dateTime={props.date}>{format(newDate, 'dd/LL/yy')}</time>
    )
}