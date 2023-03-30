import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'

import { useState } from 'react'
import { LoginContext } from '@/components/context/LoginContext';
import { CurrentPageContext } from '@/components/context/CurrentPageContext';
import { OpenLookUpContext } from '@/components/context/OpenLookup'
import { ChatBoxContext } from '@/components/context/ChatBoxContext'
export default function App({ Component, pageProps }: AppProps) {
  const [login, setLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState('profile');
  const [lookupOpen, setLookUp] = useState(false);
  const [chatBox, setChatBox] = useState(false);
  return <>
    <DefaultSeo {...SEO} />
    <LoginContext.Provider value={{ hasLogin: login, setLogin: setLogin }}>
      <CurrentPageContext.Provider value={{ page: currentPage, setPage: setCurrentPage }}>
        <OpenLookUpContext.Provider value={{ isOpen: lookupOpen, toggle: setLookUp }}>
          <ChatBoxContext.Provider value={{ isOpen: chatBox, toggle: setChatBox }}>
            <Component {...pageProps} />
          </ChatBoxContext.Provider>
        </OpenLookUpContext.Provider>
      </CurrentPageContext.Provider>
    </LoginContext.Provider>
  </>
}
