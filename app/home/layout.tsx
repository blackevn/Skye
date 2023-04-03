'use client';

import "../../styles/globals.css"

import { Nav, Sidebar, BottomNav } from '../components'
import { useSideContext } from '../context/SideAdContext'
import { useWidth } from '../hooks';


export default function HomeLayout({

  children,

} : {

  children: React.ReactNode

}) {

  const [ width ] = useWidth()
  const { sideToggle } = useSideContext()
      
  return <>

    <div >
      
      <div>

    <Nav/>
       
        <div className='flex h-[100vh] relative pt-16'>

          { width >= 700 ?
          
          <Sidebar/>

          :

          <BottomNav/>
        
          }

          <div className=' w-full lg:grid lg:grid-cols-12'>

            <div className={`${sideToggle ? "lg:col-span-9" : "lg:col-span-12" } overflow-auto bg-gray-400 w-full h-full p-10`}>

            { children }

            </div>

        { sideToggle &&  <div className='hidden lg:block lg:col-span-3 bg-gray-700'>

          </div> 
}
          </div>
       
        </div>

      </div>

    </div>

    </>
}
