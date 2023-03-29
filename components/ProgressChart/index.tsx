import { BarChartConfiguration } from "../Types";

const ProgressChart: React.FC<BarChartConfiguration> = (props) => {

    return (
        <div className="flex flex-col items-center w-full h-3/5 max-w-screen-md  bg-white rounded-lg shadow-xl sm:p-8 bg-black">
            <h2 className="text-xl font-bold">Monthly Revenue</h2>
            <span className="text-sm font-semibold text-gray-500">2020</span>
            <div className="flex items-end flex-grow w-full h-1/2 mt-2 space-x-2 sm:space-x-3">
                <div className="relative flex flex-col items-center flex-grow pb-0 group h-max-2/3">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$37,500</span>
                    <div className="relative flex justify-center w-full h-16 bg-indigo-400"></div>
                    <span className="absolute bottom-0 text-xs font-bold text-black">Jan</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-0 group h-max-2/3">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$45,000</span>
                    <div className="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                    <span className="absolute bottom-0 text-xs font-bold text-black">Feb</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-0 group h-max-2/3">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
                    <div className="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                    <span className="absolute bottom-0 text-xs font-bold text-black">Mar</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-0 group h-max-2/3">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$50,000</span>
                    <div className="relative flex justify-center w-full h-24 bg-indigo-400"></div>
                    <span className="absolute bottom-0 text-xs font-bold text-black">Apr</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-0 group h-max-2/3">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
                    <div className="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                    <span className="absolute bottom-0 text-xs font-bold text-black">May</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-0 group h-max-2/3">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$55,000</span>
                    <div className="relative flex justify-center w-full h-24 bg-indigo-400"></div>
                    <span className="absolute bottom-0 text-xs font-bold text-black">Jun</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-0 group h-max-2/3">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$60,000</span>
                    <div className="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                    <span className="absolute bottom-0 text-xs font-bold text-black">Jul</span>
                </div>
            </div>
            <div className="flex w-full mt-3">
                <div className="flex items-center ml-auto">
                    <span className="block w-4 h-4 bg-indigo-400"></span>
                    <span className="ml-1 text-xs font-medium">Existing</span>
                </div>
                <div className="flex items-center ml-4">
                    <span className="block w-4 h-4 bg-indigo-300"></span>
                    <span className="ml-1 text-xs font-medium">Upgrades</span>
                </div>
                <div className="flex items-center ml-4">
                    <span className="block w-4 h-4 bg-indigo-200"></span>
                    <span className="ml-1 text-xs font-medium">New</span>
                </div>
            </div>
        </div>
    )
}

export default ProgressChart;