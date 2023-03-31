import HashTag from "./HashTag"

interface HashTagsBarProps {
    controlled: boolean,
    hashTags: { title: string, content: string, index: number }[],
}

const HashTagsBar: React.FC<HashTagsBarProps> = (props) => {
    
    if (props.controlled) return (
        <div className="border border-solid border-2 border-black xl:rounded-3xl sm:rounded-2xl h-full xl:w-1/6 bg-fourthBLUEBG flex flex-col items-center justify-top overflow-y-auto">
            {props.hashTags.map((hashTag) =>  <HashTag title={hashTag.title} content={hashTag.content} index={hashTag.index}/>)}
        </div>
    )
    return null;
}

export default HashTagsBar;