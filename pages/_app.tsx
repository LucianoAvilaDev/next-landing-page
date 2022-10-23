import '../styles/globals.css'

import React from 'react'
import { AppProps } from 'next/app'
import Navbar from '../src/components/Navbar/Navbar'
import { NavbarMenus } from '../src/components/Navbar/NavbarMenus'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar 
        title='Landing Page' 
        menus={NavbarMenus} 
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
