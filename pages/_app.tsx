import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'

import { useState } from 'react'
import { LoginContext } from '@/components/context/LoginContext';
import { CurrentPageContext } from '@/components/context/CurrentPageContext';

export default function App({ Component, pageProps }: AppProps) {
  const [login, setLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState('profile');


  return <>
    <DefaultSeo {...SEO} />
    <LoginContext.Provider value={{ hasLogin: login, setLogin: setLogin }}>
      <CurrentPageContext.Provider value={{ page: currentPage, setPage: setCurrentPage }}>
        <Component {...pageProps} />
      </CurrentPageContext.Provider>
    </LoginContext.Provider>
  </>
}
