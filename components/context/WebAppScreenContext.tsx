import { Dispatch, createContext } from "react";

interface WebAppScreenContextTypes {
    screen: 'entrance' | 'upload-new-file' | 'resume-learning' | 'interactivity',
    changeScreen: Dispatch<'entrance' | 'upload-new-file' | 'resume-learning' | 'interactivity'>
}

export const WebAppScreenContext = createContext<WebAppScreenContextTypes>({ screen: 'entrance', changeScreen: () => { } });