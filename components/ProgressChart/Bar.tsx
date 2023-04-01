interface BarProps {
    studyHours: number,
    dayOfWeek: string
}

const Bar: React.FC<BarProps> = (props) => {

    const hours: number = props.studyHours / 24 * 100;
    return (
        <div className="relative flex flex-col justify-end flex-grow group h-full">
            <div className="relative flex justify-center w-full bg-green-800 hover:contrast-150 rounded-t-xl" style={{ height: `${hours}%` }}>
                <span className="absolute -top-0 hidden -mt-6 xl:text-sm sm:text-sm group-hover:block text-black font-bold">{props.studyHours} {props.studyHours > 1 ? 'hours' : 'hour'}</span>
            </div>
            <span className="flex flex-col self-center xl:text-md sm:text-sm text-black font-bold">{props.dayOfWeek}</span>
        </div>
    )
}

export default Bar;