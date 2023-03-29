import Item from "./Item";

interface CompletionProgressProps {
    books: { title: string, chapter: string, progress: number }[]
}

const CompletionProgress: React.FC<CompletionProgressProps> = (props) => {

    return (
        <div className='flex flex-col bg-white self-end rounded-3xl xl:w-2/5 sm:w-2/5 h-full px-2 py-2'>
            <div className="text-black font-bold text-xl self-center">Completion Progress</div>
            <span className="h-1 w-5/6 bg-secondary xl:w-full sm:w-full rounded-lg"></span>
            <ul className='grid grid-rows-max w-full h-full overflow-y-auto overflow-x-hidden'>
                {props.books.map(book => <Item title={book.title} chapter={book.chapter} progress={book.progress} />)}
            </ul>
        </div>
    )
}

export default CompletionProgress;