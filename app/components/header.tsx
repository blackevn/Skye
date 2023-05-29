'use client';

import { faBars, faXmark, faArrowAltCircleRight, faAngleLeft, faAngleRight, faSignOut, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Toggle from "./toggle";
import { useAppContext } from "../context/AppContext";
import { useSideContext } from "../context/SideAdContext";
import Button from "./button";
import { useDarkMode, useWidth } from "../hooks";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"
import UserDropdown from "./userDropdown";
import { motion } from "framer-motion";

const Nav = () => {

    const { toggle, handleToggle, user } = useAppContext()
    const [ width ] = useWidth()
    const { handleSideToggle, sideToggle } = useSideContext()
    const { data: session } = useSession()
     
  return <>

  <motion.div className="fixed top-0 z-[995] w-screen box-border bg-base-100 dark:bg-black text-gray-600 dark:text-gray-200"
            transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                
                }}
            >
              
            { width <= 700 && <motion.div 
                                
                                className={` ${toggle ? "block" : "hidden"} p-8`}>

            <p className="text-gray-500 font-semibold">Sign in to create posts, like, comment on other posts and follow others.</p>

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

                <div className={`${width >= 700 && "hidden"}`}>
                <UserDropdown currentUser={user}>
                  <Link href={`/home/profile/${user?.id}`}>
                  <div className=" text-white bg-black/20 p-4 grid place-items-center rounded-xl">
                  <h1 className="font-bold text-xl text-white">{user?.name}</h1>
                  <h1 className="font-bold text-lg">{user?.email}</h1>
                  </div>
                  </Link>
                  <Button clickEvent={() => signOut({callbackUrl: '/', redirect: true})} modifier="btn" text="Sign out" icon={faSignOut}/>
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
