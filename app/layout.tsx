"use client"

import '../styles/globals.css'

import { AppContext } from './context/AppContext'
import { SideAdContext } from './context/SideAdContext'
import { SessionProvider } from "next-auth/react";

export default function RootLayout({   children  } : {
    children: React.ReactNode 
  }) {

    return <html lang="en">

      <body>
       <SessionProvider>
            <AppContext>
                  <SideAdContext>

                    <div className="overflow-x-hidden box-border ">
                      
                              {children}   

                    </div>
                       
                      
                  </SideAdContext>
            </AppContext>
      </SessionProvider>
      </body>
      </html>

  }