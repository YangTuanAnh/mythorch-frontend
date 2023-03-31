import { createContext } from "react"
import { Dispatch } from "react"
interface ContentContextProps {
    content: any,
    setContent: Dispatch<any>
}

export const ContentContext = createContext<ContentContextProps>({ content: null, setContent: () => { } });