'use client';

import "../../styles/globals.css"

import { Nav, Sidebar, BottomNav, People, Footer, Button, AdBox, Modal, AddPost } from '../components'
import { useWidth, useCurrentUser } from '../hooks';
import Link from "next/link";
import { faArrowAltCircleRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import Toast from "../components/toast/toast";
import { useAppContext } from "../context/AppContext";

export default function HomeLayout({

  children,

} : {

  children: React.ReactNode

}) {

  const [ width ] = useWidth()
  const { data: currentUser } = useCurrentUser()
  const { addPostToggle, user } = useAppContext()
        
  return <>

          <div className="box-border relative text-gray-600 dark:text-gray-200">
                
            { addPostToggle && 
            
                <Modal>
                  <AddPost/>
                </Modal>
                            
            }

          <div>

        <Nav/>
          
            <div className='flex h-[100vh] relative pt-16'>

              { width >= 700 ?
              
                <Sidebar/>

              :

                <BottomNav/>
            
              }

              <div className='w-full lg:grid lg:grid-cols-12'>

                <div className={`lg:col-span-9 overflow-scroll p-4 w-full h-full hideScrollBar`}>

                { children }

                </div>

            <div className={`hidden lg:flex lg:col-span-3 px-4 space-y-8 justify-between flex-col h-full overflow-auto max-w-[365px]`}>
              
            { user ?  <div className="space-y-8">

                <AdBox/>
                <People currentUser={currentUser}/>

              </div> 
              
              :  

              <div>

                  <div className={` rounded-3xl relative shadow-xl w-full gap-2 grid p-4 dark:bg-gray-800`} >

                  <p className="text-gray-500 lg:font-medium">Sign in to create posts, like, comment, and follow others.</p>

          <div className="w-full space-y-2">

                  <Link  href="/"> 

                  <Button 
                  icon={faArrowAltCircleRight}
                  text="Sign in" 
                  modifier="blueGradient btn w-full"
                
                  />

                  </Link>   

                  <Button 
                  icon={faArrowAltCircleRight}
                  text="Test Toast" 
                  modifier="blueGradient btn w-full"
                  clickEvent={(t: any) => toast.custom(<Toast text="Task completed successfully"
                                                        modifier={`bg-green-500 text-white`}
                                                        icon={faInfoCircle}
                                                        mode={true}
                                                        clickEvent={() => toast.dismiss(t.id)}
                                                        >

                                                        <h1>This is more information</h1>

                                                        </Toast>
                                                        
                                                        )}
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
