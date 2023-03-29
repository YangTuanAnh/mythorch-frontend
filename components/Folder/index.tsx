interface FolderProps {
    name: string,
    books: string[]
}

const Folder: React.FC<FolderProps> = (props) => {
    return (
        <div className='flex flex-col w-full h-fit sm:ml-1 xl:mx-2'>
            <h2 className="text-black font-bold sm:text-sm xl:text-lg hover:xl:scale-y-110">{props.name}</h2>
            {props.books.map(book => <p className="text-black sm:text-sm xl:text-md xl:my-1">{book}</p>)}
        </div>
    )
}

export default Folder;