interface BarProps {
    studyHours: number,
    dayOfWeek: string
}

const Bar: React.FC<BarProps> = (props) => {

    const hours = props.studyHours <= 12 ? props.studyHours: props.studyHours <= 14? 32: props.studyHours <= 17 ? 36: props.studyHours <= 23? 48: 56;
    return (
        <div className="relative flex flex-col items-center flex-grow group h-max">
            <span className="absolute top-0 hidden -mt-6 xl:text-md sm:text-xs group-hover:block text-green-800 font-bold">{props.studyHours} {props.studyHours > 1 ? 'hours': 'hour'}</span>
            <div className={`relative flex justify-center w-full h-${hours} bg-green-800 hover:contrast-150 rounded-t-xl`}></div>
            <span className="flex flex-col self-center xl:text-md sm:text-sm text-black font-bold">{props.dayOfWeek}</span>
        </div>
    )
}

export default Bar;