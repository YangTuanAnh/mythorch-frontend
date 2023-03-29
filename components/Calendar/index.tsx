import dayjs from "dayjs";
import range from "lodash-es/range";
import { useState } from "react";
interface CalendarProps {

}
const todayObj = dayjs();
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const Calendar: React.FC<CalendarProps> = (props) => {
    const [dayObj, setDayObj] = useState(dayjs());
    const [events, setEvents] = useState([dayjs('2023-02-27'), dayjs('2023-03-06'), dayjs('2023-03-19'), dayjs('2023-03-25')]);

    const thisYear = dayObj.year();
    const thisMonth = dayObj.month(); // (January as 0, December as 11)
    const daysInMonth = dayObj.daysInMonth();

    const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
    const weekDayOf1 = dayObjOf1.day(); // (Sunday as 0, Saturday as 6)

    const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
    const weekDayOfLast = dayObjOfLast.day();
    return (
        <div className="flex flex-col items-center w-full h-full hover:drop-shadow-xl bg-teal-800 rounded-3xl xl:p-2 xl:ml-0 xl:mb-0 sm:mb-3 sm:p-2">
            <div className="text-white font-bold sm:text-lg xl:text-xl self-start sm:ml-2 sm:mb-2 sm:mt-1 justify-center">Calendar</div>
            <div className='grid h-full w-full xl:m-1 rounded-3xl bg-white'>
                <div className='flex flex-row mx-1 h-1/5 my-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6 xl:mx-2 sm:mx-1 hover:stroke-3 hover:fill-teal-800">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6 xl:mx-2 sm:mx-1 hover:stroke-3 hover:fill-teal-800">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </svg>
                    <div className="flex flex-col w-full h-fit">
                        <div className="self-end xl:text-xl text-black mx-1">{dayObj.format("MMMM YYYY")}</div>
                    </div>
                </div>
                <div className="grid mx-1 h-4/5 bg-black">

                </div>
            </div>
        </div>
    )
}

export default Calendar;