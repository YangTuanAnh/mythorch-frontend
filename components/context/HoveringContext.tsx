import { createContext, Dispatch } from "react";

interface HoveringContext {
    hoverTitle: string[],
    setHoverTitle: Dispatch<string[]>
}

export const HoveringContext = createContext<HoveringContext>({ hoverTitle: [], setHoverTitle: () => { } });