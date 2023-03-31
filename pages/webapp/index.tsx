import Layout from "@/components/Layout";
import { ChatBoxContext } from "@/components/context/ChatBoxContext";
import { useContext } from "react";
import { GetServerSideProps } from "next";
import Documents from "@/components/Documents";
import ChatBox from "@/components/ChatBox";
import HashTagsBar from "@/components/HashTagsBar";
import { HoveringContext } from "@/components/context/HoveringContext";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            files: {
                name: 'Introduction to MobX',
                payload: [{
                    content: [`MobX is an open source state management tool. When creating a web application, developers often seek an effective way of managing state within their applications. One solution is to use a unidirectional data flow pattern named Flux, introduced by the React team, and later implemented in a package called React-Redux, which made the use of the Flux pattern even easier`,
                        `MobX, a simple, scalable, and standalone state management library, follows functional reactive programming (FRP) implementation and prevents inconsistent state by ensuring that all derivations are performed automatically. According to the MobX getting started page, “MobX makes state management simple again by addressing the root issue: it makes it impossible to produce an inconsistent state”`,
                        `MobX is standalone and does not depend on any frontend library or framework to work. There are implementations of the MobX in popular front-end frameworks like React, Vue, and Angular`],
                    index: 0
                },
                {
                    content: [`In this tutorial, we will discuss how to use MobX with React, but first, we will begin by getting to understand MobX a little better`,
                        `In addition to being a library, MobX also introduces a few concepts: state, actions, and derivations (including reactions and computed values)`,
                        `Application state refers to the entire model of an application, and can contain different data types including array, numbers, and objects. In MobX, actions are methods that manipulate and update the state. These methods can be bound to a JavaScript event handler to ensure a UI event triggers them`,
                        `Anything (not just a value) that is derived from the application state without further interaction is referred to as a derivation. Derivations will listen to any particular state and then perform some computation to produce a distinct value from that state. A derivation can return any data type, including objects. In MobX, the two types of derivations are reactions and computed values`],
                    index: 1
                }],
                hashTags: [
                    {
                        title: 'Security',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
                        index: 0
                    },
                    {
                        title: 'Security',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
                        index: 1
                    },

                ]
            }
        }
    }
}

interface WebAppsProps {
    files: {
        name: string,
        payload: {
            content: string[],
            index: number
        }[],
        hashTags: {
            title: string,
            content: string,
            index: number
        }[]
    }
}



const WebApps: React.FC<WebAppsProps> = (props) => {
    const { isOpen, toggle } = useContext(ChatBoxContext);
    const [hIndex, setHIndex] = useState(-1);

    return (
        <HoveringContext.Provider value={{ hoverIndex: hIndex, setHoverIndex: setHIndex }}>
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
                <div className="flex flex-row w-full py-2 h-full justify-center relative overflow-y-hidden">
                    <Documents files={props.files.payload} name={props.files.name} />
                    <div className='rounded-xl self-center items-end absolute top-2 right-1 sm:hidden md:flex' onClick={() => toggle(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="grey" className={`w-10 h-10 hover:fill-s2condNOSTATUSBG ${isOpen && 'fill-s2condNOSTATUSBG'}`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </div>
                    <ChatBox controlled={isOpen} />
                    <HashTagsBar controlled={!isOpen} hashTags={props.files.hashTags}/>
                </div>
            </Layout>
        </HoveringContext.Provider>

    )
}

export default WebApps;