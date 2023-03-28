interface ItemProps {
    title: string,
    chapter: string,
    progress: number
}

const Item: React.FC<ItemProps> = (props) => {

    return (
        <li className='flex flex-row w-full h-full relative bg-red rounded-xl my-1 hover:bg-s2condCOMPLETEDBG'>
            <div className='flex flex-col xl:w-5/6 sm:w-3/4 h-full justify-center items-center self-center'>
                <div className="flex flex-col w-full sm:text-sm  xl:text-sm font-bold truncate absolute top-0 left-3 text-black">
                    {props.title}
                </div>
                <div className="flex flex-col text-sm absolute left-3 bottom-0 mt-1">
                    <p className="my-1 text-black">{props.chapter}</p>
                </div>
            </div>
        </li>
    )
}

export default Item;