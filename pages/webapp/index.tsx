import Layout from "@/components/Layout";
import { ChatBoxContext } from "@/components/context/ChatBoxContext";
import { useContext, useEffect } from "react";
import { GetServerSideProps } from "next";
import Documents from "@/components/Documents";
import ChatBox from "@/components/ChatBox";
import HashTagsBar from "@/components/HashTagsBar";
import { HoveringContext } from "@/components/context/HoveringContext";
import { useState } from "react";
import { WebAppScreenContext } from "@/components/context/WebAppScreenContext";
import Prompts from "@/components/Prompts";

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            files: {
                name: 'Introduction to MobX',
                payload: [[`MobX is an open source state management tool. When creating a web application, developers often seek an effective way of managing state within their applications. One solution is to use a unidirectional data flow pattern named Flux, introduced by the React team, and later implemented in a package called React-Redux, which made the use of the Flux pattern even easier`,
                    `MobX, a simple, scalable, and standalone state management library, follows functional reactive programming (FRP) implementation and prevents inconsistent state by ensuring that all derivations are performed automatically. According to the MobX getting started page, “MobX makes state management simple again by addressing the root issue: it makes it impossible to produce an inconsistent state”`,
                    `MobX is standalone and does not depend on any frontend library or framework to work. There are implementations of the MobX in popular front-end frameworks like React, Vue, and Angular`],
                [`In this tutorial, we will discuss how to use MobX with React, but first, we will begin by getting to understand MobX a little better`,
                    `In addition to being a library, MobX also introduces a few concepts: state, actions, and derivations (including reactions and computed values)`,
                    `Application state refers to the entire model of an application, and can contain different data types including array, numbers, and objects. In MobX, actions are methods that manipulate and update the state. These methods can be bound to a JavaScript event handler to ensure a UI event triggers them`,
                    `Anything (not just a value) that is derived from the application state without further interaction is referred to as a derivation. Derivations will listen to any particular state and then perform some computation to produce a distinct value from that state. A derivation can return any data type, including objects. In MobX, the two types of derivations are reactions and computed values`]],
                tags: [['MobX', 'State Management', 'React', 'JavaScript', 'Frontend', 'Tutorial', 'Introduction'], ['MobX', 'State Management', 'React', 'Tutorial', 'Introduction']]
            }
        }
    }
}

interface WebAppsProps {
    files: {
        name: string,
        payload: string[][],
        tags: string[][]
    }
}



const WebApps: React.FC<WebAppsProps> = (props) => {
    const { isOpen, toggle } = useContext(ChatBoxContext);
    const [hTitle, setHTitle] = useState<string[]>([]);
    const { screen, changeScreen } = useContext(WebAppScreenContext);
    const [link, setLink] = useState<string>('');
    const [apiKey, setApiKey] = useState<string>('');
    const [progressMessage, setProgressMessage] = useState<'Connecting to server...' | 'Validating GPT-3 API key...' | 'Inspecting input document...' | 'Generating content...' | 'Completed!'>('Connecting to server...');

    const handleProcessing = (link: string, apiKey: string) => {
        changeScreen('processing');
        // fetching data from server here



        // pass the data to the interactivity screen
        

    }

    useEffect(() => {
        setTimeout(() => {if(progressMessage === 'Completed!') changeScreen('interactivity')}, 2000);
    }, [progressMessage])

    if (screen === 'entrance') {
        return (
            <Layout>
                <div className="flex flex-row w-full py-2 h-full justify-center">
                    <div className="flex flex-col xl:w-72 xl:h-24 sm:w-48 sm:h-16 self-center justify-center">
                        <div onClick={() => changeScreen('upload-new-file')} className="flex flex-row bg-fourthBLUEBUTTON xl:my-1 xl:w-4/5 xl:h-2/5 sm:my-1 sm:w-5/6 sm:h-2/5 sm:rounded-lg   self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-1 sm:text-sm xl:text-lg hover:bg-white group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="w-6 h-6 group-hover:stroke-fourthBLUEBUTTON">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>
                            <p className="font-bold text-white group-hover:text-fourthBLUEBUTTON">Upload new file</p>
                        </div>
                        <div onClick={() => changeScreen('resume-learning')} className="flex flex-row bg-fourthBLUEBUTTON xl:my-1 xl:w-4/5 xl:h-2/5 sm:my-1 sm:w-5/6 sm:h-2/5 sm:rounded-lg   self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-1 sm:text-sm xl:text-lg hover:bg-white group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="w-6 h-6 group-hover:stroke-fourthBLUEBUTTON">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                            </svg>
                            <p className="font-bold text-white group-hover:text-fourthBLUEBUTTON">Resume learning</p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    if (screen === 'upload-new-file') {
        return (
            <Layout>
                <div className="flex flex-row w-full py-2 h-full justify-center">
                    <div className="flex flex-col xl:w-1/3 xl:h-1/5 sm:w-2/3 sm:h-1/6 self-center justify-center">
                        <div className="flex flex-row xl:my-1 xl:w-full xl:h-3/5 sm:my-1 sm:w-full sm:h-4/5  self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-2 sm:text-sm xl:text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" className="w-6 h-6 stroke-fourthBLUEBUTTON">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            <input onChange={(event) => setLink(event.target.value)} className="text-black sm:w-full sm:h-full sm:rounded-xl sm:px-1 sm:text-md xl:w-full xl:h-4/5 xl:rounded-2xl xl:px-2 overflow-x-auto xl:my-1 bg-white" placeholder="Type your link here" />
                        </div>
                        <div className="flex flex-row xl:my-1 xl:w-full xl:h-3/5 sm:my-1 sm:w-full sm:h-4/5  self-center xl:rounded-3xl justify-center items-center xl:gap-2 sm:gap-2 sm:text-sm xl:text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" className="w-6 h-6 stroke-fourthBLUEBUTTON">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                            </svg>
                            <input onChange={(event) => setApiKey(event.target.value)} className="text-black sm:w-full sm:h-full sm:rounded-xl sm:px-1 sm:text-md xl:w-full xl:h-4/5 xl:rounded-2xl xl:px-2 overflow-x-auto xl:my-1 bg-white" placeholder="Type your GPT-3 API key here" />
                        </div>
                        <div onClick={() => handleProcessing(link, apiKey)} className="flex flex-row bg-fourthBLUEBUTTON xl:my-1 xl:w-full xl:h-2/5 sm:my-1 sm:w-full sm:h-full rounded-3xl   self-center  justify-center items-center xl:gap-2 sm:gap-1 sm:text-md xl:text-lg  hover:bg-white group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" className="w-6 h-6 stroke-white group-hover:stroke-fourthBLUEBUTTON">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>
                            <p className="font-bold text-white group-hover:text-fourthBLUEBUTTON justify-center sefl-center">Processing</p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    if (screen === 'resume-learning') {
        return (
            <Layout>
                <Prompts bookName="Computer Hardware" />
            </Layout>
        )
    }

    if (screen === 'processing') {
        return (
            <Layout>
                <div className="flex flex-row w-full py-2 h-full justify-center">
                    <div className="flex flex-col xl:w-1/3 xl:h-1/5 sm:w-2/3 sm:h-1/6 self-center justify-center">
                        <button onClick={() => setProgressMessage('Completed!')} type="button" className="flex flex-row bg-fourthBLUEBUTTON xl:my-1 xl:w-full xl:h-2/5 sm:my-1 sm:w-full sm:h-full rounded-3xl   self-center  justify-center items-center xl:gap-2 sm:gap-1 sm:text-md xl:text-lg">
                            {progressMessage === 'Connecting to server...' && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="xl:w-10 xl:h-10 animate-spin">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>)}
                            {progressMessage === 'Completed!' && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="xl:w-10 xl:h-10 animate-bounce">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>)}
                            {(progressMessage === 'Inspecting input document...' || progressMessage === 'Validating GPT-3 API key...') && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="xl:w-10 xl:h-10 animate-bounce">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            )}
                            {progressMessage === 'Generating content...' && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="xl:w-10 xl:h-10 animate-bounce">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                            </svg>
                            )}
                            <p className="font-bold text-white group-hover:text-fourthBLUEBUTTON justify-center sefl-center">{progressMessage}</p>
                        </button>
                    </div>
                </div>
            </Layout>
        )
    }

    return (
        <HoveringContext.Provider value={{ hoverTitle: hTitle, setHoverTitle: setHTitle }}>
            <Layout>
                <div className="flex flex-row w-full py-2 h-full justify-center relative overflow-y-hidden">
                    <Documents files={props.files.payload} name={props.files.name} tags={props.files.tags} />
                    <div className='rounded-xl self-center items-end absolute top-2 right-1 sm:hidden md:flex' onClick={() => toggle(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="grey" className={`w-10 h-10 hover:fill-s2condNOSTATUSBG ${isOpen && 'fill-s2condNOSTATUSBG'}`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </div>
                    <ChatBox controlled={isOpen} />
                    <HashTagsBar controlled={!isOpen} tags={props.files.tags} />
                </div>
            </Layout>
        </HoveringContext.Provider>

    )
}

export default WebApps;