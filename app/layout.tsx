"use client"

import { Toaster } from 'react-hot-toast';
import '../styles/globals.css'

import { AppContext } from './context/AppContext'
import { SideAdContext } from './context/SideAdContext'
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

export default function RootLayout({   children  } : {
    children: React.ReactNode 
  }) {

    return <html lang="en">

      <Head>
        <title>Skye</title>
      </Head>

      <body>
       
         <SessionProvider>
          <AnimatePresence>
                <AppContext>
                  <SideAdContext>
                  <Toaster/>
                    <div className="overflow-x-hidden box-border dark:bg-black bg:bg-base-100 hideScrollBar">
                      
                              {children}   

                    </div>
                     
                  </SideAdContext>
            </AppContext>
      </AnimatePresence>
      </SessionProvider>
      </body>
      </html>

  }