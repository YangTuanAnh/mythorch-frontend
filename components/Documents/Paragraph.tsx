import { Popover } from "@headlessui/react";
import { useContext, useState } from "react";
import { HoveringContext } from "../context/HoveringContext";
import TextGenerationEffect from "./TextGenerationEffect";
import { ContentContext } from "../context/ContentContext";
import axios from "axios";


interface ParagraphProps {
    sentences: string[],
    index: number,
    paragraphTags?: string[]
}

interface ContentProps {
    payload: string[][],
    topics: string[][]
}

const Paragraph: React.FC<ParagraphProps> = (props) => {
    const { hoverTitle } = useContext(HoveringContext);
    const [ sentence, setSentence ] = useState<string | null>('')
    const { content, setContent } = useContext(ContentContext)
    const [loading, setLoading] = useState<boolean>(false)
    const handlePrompt = (prompt: string) =>
    {
        setLoading(true)
        console.log(props.index)
        console.log(sentence)
        axios({
            method: 'post',
            url: "https://789a-115-73-214-48.ap.ngrok.io/api/user_interact/",
            data: {
                sentence: sentence,
                prompt: prompt
            }
        })
            .then(res => {
                // ContentStore.updateContent(JSON.parse(res.data.payload), props.index)
                // setExplain(false)
                let newContent = content
                if (newContent) {
                    newContent.payload[props.index] = JSON.parse(res.data.payload)
                    newContent.topics[props.index] = JSON.parse(res.data.topics)
                    console.log(newContent)
                    setContent(newContent);
                }
                //console.log(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
        //console.log(props.index)
    }

    // const compare: (a: string[], b: string[]) => boolean = (a: string[], b: string[]) => {
    //     if (a.length !== b.length) return false;
    //     for (let i = 0; i < a.length; i++) {
    //         if(!b.includes(a[i])) return false;
    //     }
    //     return true;
    // }

    // if (compare(hoverTitle, props.paragraphTags? props.paragraphTags : [])) 
    //     return (
    //         <Popover className="relative">
    //             <Popover.Button>
    //                 <p className="sm:mx-3 sm:my-2 sm:p-1 sm:rounded-xl sm:text-lg xl:mx-4 xl:rounded-2xl justify-center xl:my-4 text-justify xl:text-xl xl:p-2  bg-s2condINPROGRESS">
    //                     {props.sentences.map((sentence, id) => <span className="text-black hover:bg-s2condINPROGRESS" onClick={() => console.log(sentence)}>{sentence}. </span>)}
    //                 </p>
    //             </Popover.Button>
    //             <Popover.Panel className="absolute left-10 top-0 z-10">
    //                 <div className="grid grid-cols-1 bg-black xl:w-96 xl:h-80 bg-thirdWELCOME xl:p-1 xl:rounded-2xl">
    //                     <div className='flex flex-col  xl-my-1 xl:h-12 xl:w-full bg-white sm:w-72 sm:h-10 sm:my-1 sm:px-1 sm:mx-1 xl:mx-0 sm:rounded-lg  text-black items-start font-bold hover:scale-y-110 xl:text-md sm:text-sm xl:px-2 xl:rounded-2xl justify-center'>I don't understand this</div>
    //                     <div className='flex flex-col  xl-my-1 xl:h-12 xl:w-full bg-fourthBLUE sm:w-72 sm:h-10 sm:my-1 sm:px-1 sm:mx-1 xl:mx-0 sm:rounded-lg  text-white items-start font-bold hover:scale-y-110 xl:text-md sm:text-sm xl:px-2 xl:rounded-2xl justify-center'>Give me more information about this</div>
    //                     <div className='flex flex-col  xl-my-1 xl:h-12 xl:w-full bg-white sm:w-72 sm:h-10 sm:my-1 sm:px-1 sm:mx-1 xl:mx-0 sm:rounded-lg  text-black items-start font-bold hover:scale-y-110 xl:text-md sm:text-sm xl:px-2 xl:rounded-2xl justify-center'>Summarize this</div>
    //                     <div className='flex flex-col  xl-my-1 xl:h-12 xl:w-full bg-fourthBLUE sm:w-72 sm:h-10 sm:my-1 sm:px-1 sm:mx-1 xl:mx-0 sm:rounded-lg  text-white items-start font-bold hover:scale-y-110 xl:text-md sm:text-sm xl:px-2 xl:rounded-2xl justify-center'>Explain this</div>
    //                     <div className='flex flex-row items-center bg-thirdWELCOME xl-my-1 xl:h-12 xl:w-full sm:w-72 sm:h-10 sm:my-1 sm:px-1 xl:px-0 mx-0 sm:rounded-lg  text-black items-start xl:text-md sm:text-sm xl:px-2 xl:rounded-2xl justify-center'>
    //                         <input type='text' className='bg-fourthBLUEBG xl:rounded-xl sm:rounded-md sm:h-5/6 xl:h-4/5 text-black xl:w-11/12 sm:w-5/6 pl-1' placeholder='Type your feedback here' />
    //                         <svg className='w-8 h-8 xl:ml-1 sm:ml-3 hover:scale-105' viewBox="0 0 16 16" stroke='black' fill="none" xmlns="http://www.w3.org/2000/svg">
    //                             <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3476 0.832349L13.167 3.65175C13.5146 3.99936 13.5146 4.56294 13.167 4.91055L6.09012 11.9877C5.97737 12.1004 5.83641 12.1808 5.68197 12.2205L1.88948 13.1936C1.23393 13.3619 0.637914 12.7658 0.806123 12.1103L1.77923 8.31766C1.81886 8.16321 1.89924 8.02225 2.01199 7.90949L9.08885 0.83236C9.43643 0.484758 9.99998 0.484755 10.3476 0.832349ZM9.71822 1.71351L2.80168 8.63032L1.91547 12.0843L5.36932 11.198L12.2859 4.28116L9.71822 1.71351Z" fill="white" />
    //                         </svg>

    //                     </div>
    //                 </div>
    //             </Popover.Panel>
    //         </Popover>
    //     )

    return (
        <Popover className="relative">
            
                {loading && <div className="w-full animate-pulse px-6 pt-4 flex flex-col gap-2">
                    <div className="flex gap-2">
                        <div className="h-4 bg-slate-200 rounded col-span-2 w-2/3"></div>
                        <div className="h-4 bg-slate-200 rounded col-span-2 w-1/3"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-4 bg-slate-200 rounded col-span-2 w-1/3"></div>
                        <div className="h-4 bg-slate-200 rounded col-span-2 w-2/3"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-4 bg-slate-200 rounded col-span-2 w-1/2"></div>
                        <div className="h-4 bg-slate-200 rounded col-span-2 w-1/6"></div>
                        <div className="h-4 bg-slate-200 rounded col-span-2 w-1/3"></div>
                    </div>
                </div>}
                {!loading && 
                <Popover.Button>
                <p className="sm:mx-3 sm:my-2 sm:p-1 sm:rounded-xl sm:text-lg xl:mx-4 xl:rounded-2xl justify-center xl:my-4 text-justify xl:text-xl xl:p-2 ">
                    {props.sentences.map(sentence => <span className="text-black hover:bg-s2condINPROGRESS" onClick={() => setSentence(sentence)}>{sentence}. </span>)}
                </p>
                </Popover.Button>}
                
                {/* <TextGenerationEffect paragraph={props.sentences}/> */}
            
            <Popover.Panel className="absolute left-10 top-0 z-10">
                <div className="grid grid-cols-1 bg-black xl:w-96 xl:h-80 bg-thirdWELCOME xl:p-1 xl:rounded-2xl">
                    <button className='flex flex-col  xl-my-1 xl:h-12 xl:w-full bg-white sm:w-72 sm:h-10 sm:my-1 sm:px-1 sm:mx-1 xl:mx-0 sm:rounded-lg  text-black items-start font-bold hover:scale-y-110 xl:text-md sm:text-sm xl:px-2 xl:rounded-2xl justify-center'
                    onClick={() => handlePrompt("Explain like I'm 5")}>I don't understand this</button>
                    <button className='flex flex-col  xl-my-1 xl:h-12 xl:w-full bg-fourthBLUE sm:w-72 sm:h-10 sm:my-1 sm:px-1 sm:mx-1 xl:mx-0 sm:rounded-lg  text-white items-start font-bold hover:scale-y-110 xl:text-md sm:text-sm xl:px-2 xl:rounded-2xl justify-center'
                    onClick={() => handlePrompt("Give me more information about this")}>Give me more information about this</button>
                    <button className='flex flex-col  xl-my-1 xl:h-12 xl:w-full bg-white sm:w-72 sm:h-10 sm:my-1 sm:px-1 sm:mx-1 xl:mx-0 sm:rounded-lg  text-black items-start font-bold hover:scale-y-110 xl:text-md sm:text-sm xl:px-2 xl:rounded-2xl justify-center'
                    onClick={() => handlePrompt("Summarize this")}>Summarize this</button>
                    <button className='flex flex-col  xl-my-1 xl:h-12 xl:w-full bg-fourthBLUE sm:w-72 sm:h-10 sm:my-1 sm:px-1 sm:mx-1 xl:mx-0 sm:rounded-lg  text-white items-start font-bold hover:scale-y-110 xl:text-md sm:text-sm xl:px-2 xl:rounded-2xl justify-center'
                    onClick={() => handlePrompt("Explain more about this")}>Explain more about this</button>
                    <div className='flex flex-row items-center bg-thirdWELCOME xl-my-1 xl:h-12 xl:w-full sm:w-72 sm:h-10 sm:my-1 sm:px-1 xl:px-0 mx-0 sm:rounded-lg  text-black items-start xl:text-md sm:text-sm xl:px-2 xl:rounded-2xl justify-center'>
                        <input type='text' className='bg-fourthBLUEBG xl:rounded-xl sm:rounded-md sm:h-5/6 xl:h-4/5 text-black xl:w-11/12 sm:w-5/6 pl-1' placeholder='Type your feedback here' />
                        <svg className='w-8 h-8 xl:ml-1 sm:ml-3 hover:scale-105' viewBox="0 0 16 16" stroke='black' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3476 0.832349L13.167 3.65175C13.5146 3.99936 13.5146 4.56294 13.167 4.91055L6.09012 11.9877C5.97737 12.1004 5.83641 12.1808 5.68197 12.2205L1.88948 13.1936C1.23393 13.3619 0.637914 12.7658 0.806123 12.1103L1.77923 8.31766C1.81886 8.16321 1.89924 8.02225 2.01199 7.90949L9.08885 0.83236C9.43643 0.484758 9.99998 0.484755 10.3476 0.832349ZM9.71822 1.71351L2.80168 8.63032L1.91547 12.0843L5.36932 11.198L12.2859 4.28116L9.71822 1.71351Z" fill="white" />
                        </svg>

                    </div>
                </div>
            </Popover.Panel>
        </Popover>
    )
}

export default Paragraph;