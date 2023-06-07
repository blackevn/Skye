'use client';

import { faBars, faXmark, faArrowAltCircleRight, faAngleLeft, faAngleRight, faSignOut, faMoon, faSun, faPlus } from "@fortawesome/free-solid-svg-icons";
import Toggle from "./toggle";
import { useAppContext } from "../context/AppContext";
import { useSideContext } from "../context/SideAdContext";
import Button from "./button";
import { useWidth } from "../hooks";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"
import UserDropdown from "./userDropdown";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Nav = () => {

    const { toggle, handleToggle, user, darkMode, toggleDarkMode, handleAddPostToggle } = useAppContext()
    const [ width ] = useWidth()
    const { handleSideToggle, sideToggle } = useSideContext()
    const { data: session } = useSession()
    const headerController = useAnimation()
   
    return <>

            <motion.div className="fixed top-0 z-[995] w-screen box-border bg-base-100 dark:bg-black text-gray-600 dark:text-gray-200">
              
            { width <= 700 && <motion.div 
                               
              className={` p-8 ${toggle ? 'block' : 'hidden'}`}>

            {toggle && <div>
                <p className="text-gray-500 font-semibold">Sign in to create posts, like, comment on other posts and follow others.</p>
              </div>
            }


            </motion.div> }

            <div className="pr-4 pl-4 sm:px-9 py-4 flex justify-between items-center">

                <div className="flex gap-8">

                <Toggle
                    on={faXmark}
                    off={faBars}
                    checked={toggle}
                    toggleEvent={handleToggle}
                />

                <Link href='/home'>
                <p className="font-black text-2xl">Skye</p>
                </Link>
                </div>

                <div className=" flex gap-8 items-center">

               
              <div className={`${ width <= 1024 ? "block" : "hidden" } `}>

              { !session?.user ? 
                <Link href="/">
                  <Button 
                    icon={faArrowAltCircleRight}
                    text="Sign in" 
                    modifier="bg-gradient-to-r from-cyan-500 to-blue-500 btn bottom-0 right-0 text-white"
                    />
                </Link>

                :

              <div className={`${width >= 700 && "hidden"} flex gap-8 items-center`}>
                  <Button
                  icon={faPlus}
                  modifier="blueGradient"
                  text=""
                  clickEvent={handleAddPostToggle}
                  />
                <UserDropdown currentUser={user}>
                <div className="flex justify-between pb-4">
                  <div 
                  className='flex gap-2 items-center p-1 cursor-pointer relative overflow-hidden max-w-fit'>  
                  <div 
                     onClick={(e: React.MouseEvent ) => {
                        e.stopPropagation(); 
                        toggleDarkMode()
                      }}
                  className="top-0 bottom-0 right-0 left-0 z-50 absolute"></div>
                    <Toggle
                    on={faSun}
                    off={faMoon}
                    checked={darkMode}
                    />

                    <h1>
                        { darkMode ? 'Light' : 'Dark' }
                    </h1>

                  </div>

                  <Button clickEvent={() => signOut({callbackUrl: '/', redirect: true})} text="Sign out" icon={faSignOut}/>
                  </div>
                  <Link href={`/home/profile/${user?.id}`}>
                  <div className=" text-white bg-black/20 p-4 grid place-items-center rounded-xl">
                  <h1 className="font-bold text-xl text-white">{user?.name}</h1>
                  <h1 className="font-bold text-lg">{user?.email}</h1>
                  </div>
                  </Link>
                  
                </UserDropdown>
                </div>

                 }

                </div> 
{/*                         
                <Toggle
                    on={faSun}
                    off={faMoon}
                    checked={darkMode}
                    toggleEvent={toggleDarkMode}
                    /> */}
                         
                </div>

            </div>

            </motion.div>
  
        </>

};

export default Nav;
