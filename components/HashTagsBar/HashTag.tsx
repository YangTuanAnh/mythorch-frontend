import { HoveringContext } from "../context/HoveringContext";
import { useContext } from 'react';
interface HashTagProps {
    title: string,
    content: string,
    index: number
}

const HashTag: React.FC<HashTagProps> = (props) => {
    const { setHoverIndex } = useContext(HoveringContext);

    const handleMouseEnter = () => {
        setHoverIndex(props.index);
    }

    const handleMouseLeave = () => {
        setHoverIndex(-1);
    }

    return (
        <div className="xl:w-4/5 sm:w-max xl:mx-1  sm:mx-1 px-1 py-1 xl:rounded-2xl sm:rounded-lg h-fit my-3 items-center justify-start bg-white hover:bg-fourthBLUEBUTTON group" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            <span className="text-black m-1 text-justify text-lg group-hover:text-white">{props.content}</span>
            <h2 className="text-black font-bold m-1 text-left sm:text-sm xl:text-md group-hover:text-white">#{props.title}</h2>
        </div>
    )
}

export default HashTag;