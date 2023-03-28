import Item from "./Item";

interface CompletionProgressProps {
    books: [string, string, number][]
}

const CompletionProgress: React.FC<CompletionProgressProps> = (props) => {

    return (
        <div className='flex flex-row bg-white self-end rounded-3xl xl:w-1/3 sm:w-2/5 h-full px-2 py-2'>
            <div className="text-black font-bold text-xl">Completion Progress</div>
            <div>
                
            </div>
        </div>
    )
}

export default CompletionProgress;