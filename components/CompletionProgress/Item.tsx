import { CircularProgress } from "@mui/material"
interface ItemProps {
    title: string,
    chapter: string,
    progress: number
}

const Item: React.FC<ItemProps> = (props) => {

    return (
        <li className='group flex flex-row w-full xl:h-5/6 sm:h-12 relative bg-red rounded-xl my-1 hover:bg-thirdLOGIN xl:p-2 sm:px-1'>
            <div className='flex flex-col xl:w-2/3 sm:w-2/3 h-full self-center'>
                <div className="flex flex-col text-sm font-bold truncate sm:h-3/5 text-black">
                    {props.title}
                </div>
                <div className="flex flex-col text-sm mt-1 sm:h-1/5 sm:-mt-2 ">
                    <p className="my-1 text-black">{props.chapter}</p>
                </div>
            </div>
            <CircularProgress className='absolute right-0 top-0 m-2' variant="determinate" value={props.progress} color={props.progress >= 80 ? 'success' : props.progress >= 30 ? 'warning' : 'error'} />
        </li>
    )
}

export default Item;