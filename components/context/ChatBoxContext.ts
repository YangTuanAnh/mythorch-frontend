import { createContext } from "react"
import { Dispatch } from "react"
interface ChatBoxContextProps {
    isOpen: boolean,
    toggle: Dispatch<boolean>
}

export const ChatBoxContext = createContext<ChatBoxContextProps>({ isOpen: false, toggle: () => { } });