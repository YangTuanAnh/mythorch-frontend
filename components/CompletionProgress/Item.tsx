interface ItemProps {
    title: string,
    chapter: string,
    progress: number
}

const Item: React.FC<ItemProps> = (props) => {

    return (
        <li className='group flex flex-row w-full xl:h-5/6 sm:h-12 relative bg-red rounded-xl my-1 hover:bg-green-700 xl:p-2 sm:px-1'>
            <div className='flex flex-col xl:w-2/3 sm:w-full h-full self-center'>
                <div className="flex flex-col text-sm font-bold truncate sm:h-3/5 text-black group-hover:text-white">
                    {props.title}
                </div>
                <div className="flex flex-col text-sm mt-1 sm:h-1/5 sm:-mt-2 ">
                    <p className="my-1 text-black group-hover:text-white">{props.chapter}</p>
                </div>
            </div>
        </li>
    )
}

export default Item;