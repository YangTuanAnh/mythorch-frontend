import { createContext } from "react"
import { Dispatch } from "react"
interface ContentContextProps {
    content?: {
        payload: string[][],
        topics: string[][]
    },
    setContent: Dispatch<{
        payload: string[][],
        topics: string[][]
    }>
}

export const ContentContext = createContext<ContentContextProps>({ setContent: () => { } });