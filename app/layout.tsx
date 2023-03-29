import '../styles/globals.css'

import { AppContext } from './context/AppContext'
import { SideAdContext } from './context/SideAdContext'


export default function RootLayout({   children  } : {
    children: React.ReactNode 
  }) {

    return <html lang="en">

      <body>

            <AppContext>
                  <SideAdContext>
                       
                              {children}   
                      
                  </SideAdContext>
            </AppContext>

      </body>
      </html>

  }