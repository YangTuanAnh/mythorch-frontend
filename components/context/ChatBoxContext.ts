import { createContext } from "react"
import { Dispatch } from "react"
interface ChatBoxContextProps {
    isOpen: boolean,
    toggle: Dispatch<boolean>,
    messagesData?: {content: string, type: 'GPT-3' | 'CLIENT', sentTime?: Date} [],
}

export const ChatBoxContext = createContext<ChatBoxContextProps>({ isOpen: false, toggle: () => { }, messagesData: []});