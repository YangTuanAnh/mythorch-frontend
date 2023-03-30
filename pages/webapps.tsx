import Layout from "@/components/Layout";
import Prompts from "@/components/Prompts";
import { ChatBoxContext } from "@/components/context/ChatBoxContext";
import { useContext } from "react";
import { Transition } from "@headlessui/react";
function WebApps() {
    const { isOpen, toggle } = useContext(ChatBoxContext);
    return (
        <Layout>
            {/* <div className="flex flex-row w-full py-2 h-full justify-center">
                <div className="flex flex-col xl:w-72 xl:h-24 sm:w-48 sm:h-16 self-center justify-center">
                    <div className="flex flex-row bg-fourthBLUEBUTTON xl:my-1 xl:w-4/5 xl:h-2/5 sm:my-1 sm:w-5/6 sm:h-2/5 sm:rounded-lg   self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-1 sm:text-sm xl:text-lg hover:bg-white group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="w-6 h-6 group-hover:stroke-fourthBLUEBUTTON">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                        <p className="font-bold text-white group-hover:text-fourthBLUEBUTTON">Upload new file</p>
                    </div>
                    <div className="flex flex-row bg-fourthBLUEBUTTON xl:my-1 xl:w-4/5 xl:h-2/5 sm:my-1 sm:w-5/6 sm:h-2/5 sm:rounded-lg   self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-1 sm:text-sm xl:text-lg hover:bg-white group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="w-6 h-6 group-hover:stroke-fourthBLUEBUTTON">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                        </svg>

                        <p className="font-bold text-white group-hover:text-fourthBLUEBUTTON">Resume learning</p>
                    </div>
                </div>
            </div> */}
            {/* <Prompts bookName="Computer Hardware"/> */}
            <div className="flex flex-row w-full py-2 h-full justify-center relative">
                <div className="flex flex-col xl:w-2/3 xl:h-full sm:w-11/12 sm:h-full sm:ml-1 border border-solid border-2 xl:rounded-3xl sm:rounded-2xl border-black self-center justify-center">

                </div>
                <div className='rounded-xl hover:bg-fourthBLUEBG self-center items-end absolute top-2 right-1' onClick={() => toggle(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="grey" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                </div>
                <Transition show={isOpen} enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-x-full opacity-0"
                    enterTo="translate-x-100 opacity-100"
                    leave="transition ease-in-out duration-300 transform opacity-0"
                    leaveFrom="translate-x-100 opacity-100"
                    leaveTo="translate-x-full" className="xl:w-1/6 xl:mx-2 h-full sm:w-1/3 sm:mx-1">
                    <div className="border border-solid border-2 border-black xl:rounded-3xl sm:rounded-2xl h-full xl:w-full bg-fourthBLUEBG">

                    </div>
                </Transition>
            </div>
        </Layout>
    )
}

export default WebApps;