import { createContext, Dispatch } from "react"

interface LoginContextProps {
    hasLogin: boolean
    setLogin: Dispatch<boolean>
}

export const LoginContext = createContext<LoginContextProps>({ hasLogin: false, setLogin: () => { } });