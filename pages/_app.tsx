import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'

import { useState } from 'react'
import { CurrentPageContext } from '@/components/context/CurrentPageContext';
import { OpenLookUpContext } from '@/components/context/OpenLookup'
import { ChatBoxContext } from '@/components/context/ChatBoxContext'
import { AuthProvider } from '@/components/context/AuthContext'
import { useEffect } from 'react'
import { WebAppScreenContext } from '@/components/context/WebAppScreenContext'

const defaultMessagesData: { content: string, type: 'GPT-3' | 'CLIENT', sentTime?: Date }[] = [
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'GPT-3', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'CLIENT', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'GPT-3', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'CLIENT', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'GPT-3', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'CLIENT', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'GPT-3', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'CLIENT', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'GPT-3', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'CLIENT', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'GPT-3', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'CLIENT', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'GPT-3', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'CLIENT', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'GPT-3', sentTime: new Date() },
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: 'CLIENT', sentTime: new Date() },
]

export default function App({ Component, pageProps }: AppProps) {
  const [currentPage, setCurrentPage] = useState('webapp');
  const [lookupOpen, setLookUp] = useState(false);
  const [chatBox, setChatBox] = useState(false);
  const [webAppScreen, setWebAppScreen] = useState<'resume-learning' | 'entrance' | 'upload-new-file' | 'interactivity' | 'processing'>('entrance');
  const messagesData = defaultMessagesData;
  return <>
    <DefaultSeo {...SEO} />
    <AuthProvider>
        <CurrentPageContext.Provider value={{ page: currentPage, setPage: setCurrentPage }}>
          <OpenLookUpContext.Provider value={{ isOpen: lookupOpen, toggle: setLookUp }}>
            <WebAppScreenContext.Provider value={{ screen: webAppScreen, changeScreen: setWebAppScreen }}>
              <ChatBoxContext.Provider value={{ isOpen: chatBox, toggle: setChatBox, messagesData: messagesData }}>
                <Component {...pageProps} />
              </ChatBoxContext.Provider>
            </WebAppScreenContext.Provider>
          </OpenLookUpContext.Provider>
        </CurrentPageContext.Provider>
    </AuthProvider>

  </>
}
