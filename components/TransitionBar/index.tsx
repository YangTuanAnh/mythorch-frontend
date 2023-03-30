import { Transition } from "@headlessui/react"
import { Dispatch } from "react"

interface TransitionBarProps {
    controlled: boolean,
    conversationData?: string[]
}

const TransitionBar: React.FC<TransitionBarProps> = (props) => {
    return (
        <Transition show={props.controlled} enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-0 translate-y-full opacity-0"
            enterTo="translate-x-100 opacity-100"
            leave="transition ease-in-out duration-300 transform opacity-0"
            leaveFrom="translate-x-100  opacity-100"
            leaveTo="translate-x-0 translate-y-full" className="xl:w-1/6 xl:mx-2 h-full sm:w-1/3 sm:mx-1 sm:hidden md:flex">
            <div className="border border-solid border-2 border-black xl:rounded-3xl sm:rounded-2xl h-full xl:w-full bg-fourthBLUEBG">
            </div>
        </Transition>
    )
}

export default TransitionBar;