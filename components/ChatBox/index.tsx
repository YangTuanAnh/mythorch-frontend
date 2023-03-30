import { Transition } from "@headlessui/react";
import Message from "./Message";

interface ChatBoxProps {
    controlled: boolean,
    gptMessages?: { content: string, sentTime: Date }[],
    userMessages?: { content: string, sentTime: Date }[]
}


const ChatBox: React.FC<ChatBoxProps> = (props) => {

    return (
        <Transition show={props.controlled} enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-0 translate-y-full opacity-0"
            enterTo="translate-x-100 opacity-100"
            leave="transition ease-in-out duration-300 transform opacity-0"
            leaveFrom="translate-x-100  opacity-100"
            leaveTo="translate-x-0 translate-y-full" className="xl:w-1/6 xl:mx-2 h-full sm:w-1/3 sm:mx-1 sm:hidden md:flex">
            <div className="flex flex-col border border-solid border-2 border-black xl:rounded-3xl items-center content-bottom sm:rounded-2xl h-full xl:w-full bg-fourthBLUEBG relative">
                <div className="flex flex-col overflow-y-auto xl:bottom-20 sm:bottom-14 absolute self-center" style={{height: '88%', width:'95%'}}>
                    <div className="w-full flex-row flex justify-end"><Message type="CLIENT" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-start"><Message type="GPT-3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-end"><Message type="CLIENT" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-start"><Message type="GPT-3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-end"><Message type="CLIENT" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-start"><Message type="GPT-3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-end"><Message type="CLIENT" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-start"><Message type="GPT-3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-end"><Message type="CLIENT" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-start"><Message type="GPT-3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-end"><Message type="CLIENT" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                    <div className="w-full flex-row flex justify-start"><Message type="GPT-3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></div>
                </div>
                <div className="items-center justify-center flex flex-row w-11/12  xl:h-12 absolute  xl:bottom-2 sm:bottom-2">
                    <input type="text" className="flex flex-row bg-white border-white xl:rounded-xl xl:px-1 text-black xl:w-3/4 xl:h-2/3" />
                    <svg className="hover:bg-s2condINPROGRESSBG rounded-xl p-2 flex flex-row xl:w-10 xl:h-10 xl:ml-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1973 0.0827987C19.8912 -0.194744 20.5798 0.493811 20.3022 1.18769L13.0617 19.2889C12.7677 20.0241 11.7165 19.9932 11.4661 19.242L8.88536 11.4996L1.14301 8.91886C0.391805 8.66846 0.360934 7.61735 1.09612 7.32328L19.1973 0.0827987ZM10.3364 11.1093L12.328 17.0843L17.6391 3.80656L10.3364 11.1093ZM16.5784 2.7459L3.30075 8.05697L9.27571 10.0486L16.5784 2.7459Z" fill="#14142B" />
                    </svg>
                </div>
            </div>
        </Transition>
    )
}

export default ChatBox;
