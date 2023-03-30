import { createContext } from "react"
import { Dispatch } from "react"


interface CurrentPageContextProps {
    page: string
    setPage: Dispatch<string>
}

export const CurrentPageContext = createContext<CurrentPageContextProps>({ page: 'profile', setPage: () => { } });