import { Dispatch, createContext } from "react";

interface WebAppScreenContextTypes {
    screen: 'entrance' | 'upload-new-file' | 'resume-learning' | 'interactivity' | 'processing',
    changeScreen: Dispatch<'entrance' | 'upload-new-file' | 'resume-learning' | 'interactivity' | 'processing'>
}

export const WebAppScreenContext = createContext<WebAppScreenContextTypes>({ screen: 'entrance', changeScreen: () => { } });