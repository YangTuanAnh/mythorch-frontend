import { BarChartConfiguration } from "../Types";
import Bar from "./Bar";
const ProgressChart: React.FC<BarChartConfiguration> = (props) => {

    return (
        <div className="flex flex-col items-center w-full h-full hover:drop-shadow-xl bg-teal-800 rounded-3xl xl:p-2 xl:ml-0 xl:mb-5 sm:mb-3 sm:p-2">
            <h2 className="xl:text-xl sm:text-lg sm:pl-1 sm:my-1 font-bold text-white self-start">Efficiency Chart</h2>
            <div className="flex items-end flex-grow w-full h-full mt-2 space-x-2 sm:space-x-3 border border-solid border-2 border-primary bg-primary rounded-3xl xl:p-2 sm:p-1 ">
                <Bar studyHours={12} dayOfWeek="Mon"/>
                <Bar studyHours={11} dayOfWeek="Tue"/>
                <Bar studyHours={13} dayOfWeek="Wed"/>
                <Bar studyHours={3} dayOfWeek="Thu"/>
                <Bar studyHours={10} dayOfWeek="Fri"/>
                <Bar studyHours={9} dayOfWeek="Sat"/>
                <Bar studyHours={1} dayOfWeek="Sun"/>  
            </div>
        </div>
    )
}

export default ProgressChart;