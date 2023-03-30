interface PromptProps {
    bookName: string,
}

const Prompts: React.FC<PromptProps> = (props) => {
    return (
        <div className="flex flex-row w-full py-2 h-full justify-center">
            <div className="flex flex-col xl:w-48 xl:h-1/4 sm:w-48 sm:h-1/5 self-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" className="xl:w-28 xl:h-1/2 sm:w-24 sm:h-24 self-center">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div className="flex flex-row xl:my-1 xl:w-full xl:h-1/6 sm:my-1 sm:w-5/6 sm:h-2/5 sm:rounded-lg   self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-1 sm:text-sm xl:text-md">
                    <p className="font-bold text-black">{props.bookName.toUpperCase()}</p>
                </div>
            </div>
            <div className="flex flex-col xl:w-72 xl:h-1/4 sm:w-1/2 sm:h-1/5 self-center justify-center xl:mx-4">
                <div className="flex flex-row xl:my-1 xl:w-full xl:h-1/6 sm:my-1 sm:w-5/6 sm:h-2/5 sm:rounded-lg   self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-1 sm:text-sm xl:text-md">
                    <p className="xl:text-xl sm:text-lg font-bold text-black">Whar can we do for you?</p>
                </div>
                <div className="flex flex-row bg-fourthBLUEBUTTON xl:my-1 xl:w-full xl:h-1/6 sm:my-1 sm:w-5/6 sm:h-2/5 sm:rounded-lg   self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-1 sm:text-sm xl:text-md hover:bg-white group">
                    <p className="font-bold text-white group-hover:text-fourthBLUEBUTTON sm:mx-1">Summarize this...</p>
                </div>
                <div className="flex flex-row bg-fourthBLUEBUTTON xl:my-1 xl:w-full xl:h-1/6 sm:my-1 sm:w-5/6 sm:h-2/5 sm:rounded-lg   self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-1 sm:text-sm xl:text-md hover:bg-white group">
                    <p className="font-bold text-white group-hover:text-fourthBLUEBUTTON sm:mx-1">I find this hard to understand...</p>
                </div>
                <div className="flex flex-row bg-fourthBLUEBUTTON xl:my-1 xl:w-full xl:h-1/6 sm:my-1 sm:w-5/6 sm:h-2/5 sm:rounded-lg   self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-1 sm:text-sm xl:text-md hover:bg-white group">
                    <p className="font-bold text-white group-hover:text-fourthBLUEBUTTON sm:mx-1">I want to extend the context of this...</p>
                </div>
            </div>
        </div>
    )
}

export default Prompts;