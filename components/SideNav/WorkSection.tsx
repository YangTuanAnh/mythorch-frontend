import Folder from "../Folder";

export interface WorkSectionProps {
    folders: { name: string, books: string[] }[]
}

const WorkSection: React.FC<WorkSectionProps> = (props) => {

    return (
        <div className="flex flex-row w-full h-full bg-fourthBLUEBG">
            {props.folders.map(folder => <Folder key={folder.name} name={folder.name} books={folder.books} />)}
        </div>
    )
}

export default WorkSection;