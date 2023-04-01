interface FolderProps {
    name: string,
    books: string[]
}

const Folder: React.FC<FolderProps> = (props) => {
    return (
        <div className='flex flex-col w-full h-fit sm:ml-1 xl:mx-2'>
            <h2 className="text-black font-bold sm:text-sm xl:text-lg">{props.name}</h2>
            {props.books.map(book => <p key={book} className="text-black sm:text-sm xl:text-md xl:my-1 xl:h-8 xl:py-1 hover:rounded-lg hover:bg-s2condCOMPLETED hover:xl:px-1">{book}</p>)}
        </div>
    )
}

export default Folder;