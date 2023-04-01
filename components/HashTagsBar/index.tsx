import HashTag from "./HashTag"

interface HashTagsBarProps {
    controlled: boolean,
    tags: string[][],
}

const HashTagsBar: React.FC<HashTagsBarProps> = (props) => {

    if (props.controlled) return (
        <div className="border border-solid border-2 border-black xl:rounded-3xl sm:rounded-2xl h-full xl:w-1/6 sm:w-1/2 sm:mx-1 bg-fourthBLUEBG flex flex-col items-center justify-top overflow-y-auto">
            <div className="xl:text-lg text-black xl:m-1 text-center">
                <span className="font-bold self-center">Relevant Topics From This Document</span>
            </div>
            {props.tags.filter(tag => tag.length !== 0).map((tag) => <HashTag key={tag} titles={tag} />)}
        </div>
    )
    return null;
}

export default HashTagsBar;