import { createContext } from "react"
import { Dispatch } from "react"
interface ContentContextProps {
    content?: {
        title: string,
        payload: string[][],
        topics: string[][]
    },
    setContent: Dispatch<{
        title: string,
        payload: string[][],
        topics: string[][]
    }>
}

export const ContentContext = createContext<ContentContextProps>({ setContent: () => { } });