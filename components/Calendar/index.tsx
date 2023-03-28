interface CalendarProps {

}

const Calendar: React.FC<CalendarProps> = (props) => {

    return (
        <div className='flex flex-col bg-white self-end rounded-3xl w-full h-full px-2 py-2'>
            <div className="text-black font-bold text-xl">Calendar</div>
        </div>
    )
}

export default Calendar;