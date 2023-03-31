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
  const [login, setLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState('webapp');
  const [lookupOpen, setLookUp] = useState(false);
  const [chatBox, setChatBox] = useState(false);
  const messagesData = defaultMessagesData;
  useEffect(() => {
    // fetching messages from server
    
  }, []);

  return <>
    <DefaultSeo {...SEO} />
    <AuthProvider>
        <CurrentPageContext.Provider value={{ page: currentPage, setPage: setCurrentPage }}>
          <OpenLookUpContext.Provider value={{ isOpen: lookupOpen, toggle: setLookUp }}>
            <ChatBoxContext.Provider value={{ isOpen: chatBox, toggle: setChatBox, messagesData: messagesData}}>
              <Component {...pageProps} />
            </ChatBoxContext.Provider>
          </OpenLookUpContext.Provider>
        </CurrentPageContext.Provider>
    </AuthProvider>

  </>
}
