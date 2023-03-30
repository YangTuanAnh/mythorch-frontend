import { createContext, Dispatch } from "react";

interface OpenLookUpContext {
    isOpen: boolean,
    toggle: Dispatch<boolean>
}

export const OpenLookUpContext = createContext<OpenLookUpContext>({ isOpen: false, toggle: () => { } });