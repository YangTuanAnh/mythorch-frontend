import { useContext } from 'react';
import { ContentContext } from '../context/ContentContext';
import Paragraph from './Paragraph';

interface DocumentsProps {
    name: string,
}

const Documents: React.FC<DocumentsProps> = (props) => {
    const { content, setContent } = useContext(ContentContext);
    if(content === null) return null;
    return (
        <div className="flex flex-col  xl:w-2/3 xl:h-full sm:w-full sm:h-full self-center justify-top bg-fourthBLUEBG xl:rounded-3xl sm:mx-1 sm:rounded-2xl">
            <div className="flex flex-col items-center text-black font-bold xl:h-16 sm:h-12 sm:text-xl w-full xl:text-3xl justify-center xl:rounded-3xl sm:rounded-xl">{props.name}</div>
            <div className="flex flex-col xl:w-full xl:h-full sm:w-full sm:h-full sm:mt-2 border border-solid border-2 xl:rounded-3xl sm:rounded-2xl border-black self-center justify-top overflow-y-auto bg-white">
                {content?.payload.map((paragraph, index) => (<Paragraph sentences={paragraph} index={index} paragraphTags={content?.topics[index]}/>))}
            </div>
        </div>

    )
}

export default Documents;