'use client';

import "../../styles/globals.css"

import { Nav, Sidebar, BottomNav, DiscoveryPanel, People, Footer, Button } from '../components'
import { useSideContext } from '../context/SideAdContext'
import { useWidth } from '../hooks';
import { AdBox } from "../components";
import { useAppContext } from "../context/AppContext";
import Link from "next/link";
import { faArrowAltCircleRight, faCheckCircle, faClose } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react"
import { toast } from "react-hot-toast";
import Toast from "../components/toast/toast";


export default function HomeLayout({

  children,

} : {

  children: React.ReactNode

}) {

  const [ width ] = useWidth()
  const { sideToggle } = useSideContext()
  const { toggle, user } = useAppContext()
  const { data: session } = useSession()
        
  return <>

    <div className="box-border">
      
      <div>

    <Nav/>
       
        <div className='flex h-[100vh] relative pt-16'>

          { width >= 700 ?
          
          <Sidebar/>

           :

          <BottomNav/>
        
          }

          <div className='w-full lg:grid lg:grid-cols-12'>

            <div className={`lg:col-span-9 overflow-scroll p-4 w-full h-full`}>

            { children }

            </div>

        <div className={`hidden lg:flex lg:col-span-3 px-4 space-y-8 justify-between flex-col h-full overflow-auto max-w-[365px]`}>
          
        { session?.user ?  <div className="space-y-8">

            <DiscoveryPanel/>
            <AdBox/>
            <People/>

          </div> 
          
          :  

          <div>

              <div className={` rounded-3xl relative shadow-xl w-full gap-2 grid p-4`} >

              <p className="text-gray-500 lg:font-medium">Sign in to create posts, like, comment, and follow others.</p>

              <div className="w-full">

              <Link  href="/"> 

              <Button 
              icon={faArrowAltCircleRight}
              text="Sign in" 
              modifier="bg-gradient-to-r from-cyan-500 to-blue-500 btn text-white w-full"
            
              />

              </Link>   

               <Button 
              icon={faArrowAltCircleRight}
              text="Sign in" 
              modifier="bg-gradient-to-r from-cyan-500 to-blue-500 btn text-white w-full"
              clickEvent={(t: any) => toast.custom(<Toast text="Task completed successfully"
                                                     modifier={`bg-green-500 text-white`}
                                                     icon={faCheckCircle}
                                                     mode={true}
                                                     clickEvent={() => toast.dismiss(t.id)}
                                                     />)}
              />               
              </div>

              </div>
          </div>
          
          }

          <Footer/>

          </div> 

     
          </div>
       
        </div>

      </div>

    </div>

    </>
}
