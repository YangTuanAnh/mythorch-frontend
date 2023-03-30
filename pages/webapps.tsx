import Layout from "@/components/Layout";
import Prompts from "@/components/Prompts";
function WebApps() {
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
            <Prompts bookName="Computer Hardware"/>
        </Layout>
    )
}

export default WebApps;