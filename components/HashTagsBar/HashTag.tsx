import { HoveringContext } from "../context/HoveringContext";
import { useContext } from 'react';
interface HashTagProps {
    titles: string[],
}

const HashTag: React.FC<HashTagProps> = (props) => {
    const { setHoverTitle } = useContext(HoveringContext);

    const handleMouseEnter = () => {
        setHoverTitle(props.titles);
    }

    const handleMouseLeave = () => {
        setHoverTitle([]);
    }

    return (
        <div className="sm:w-11/12  xl:mx-1  sm:mx-1 px-1 py-1 xl:rounded-2xl sm:rounded-xl h-fit my-3 items-center justify-start bg-white hover:bg-fourthBLUEBUTTON group" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            <h2 className="text-black font-bold m-1 text-left sm:text-sm xl:text-md group-hover:text-white grid grid-cols-1">
                {props.titles.map(title => <span>#{title}</span>)}
            </h2>
        </div>
    )
}

export default HashTag;