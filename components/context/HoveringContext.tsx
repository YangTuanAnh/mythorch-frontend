import { createContext, Dispatch } from "react";

interface HoveringContext {
    hoverIndex: number,
    setHoverIndex: Dispatch<number>
}

export const HoveringContext = createContext<HoveringContext>({ hoverIndex: -1, setHoverIndex: () => { } });