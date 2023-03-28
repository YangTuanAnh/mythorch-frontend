interface ProgressChartProps {

}

const ProgressChart: React.FC<ProgressChartProps> = (props) => {

    return (
        <div className='flex flex-col bg-white self-end rounded-3xl w-full h-1/2 px-2 py-2 mt-0 mb-2'>
            <div className="text-black text-black font-bold text-xl">Progressing Chart</div>
        </div>
    )
}

export default ProgressChart;