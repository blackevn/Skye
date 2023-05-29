'use client';

import { faArrowAltCircleRight, faMoon, faPlusCircle, faSignOut, faSun } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import NavLink from "./navlink";
import { useAppContext } from "../context/AppContext"; 
import { signOut } from "next-auth/react"
import Avatar from "./avatar";
import { useRouter } from "next/navigation";
import { useLinks } from "../hooks";
import { motion } from "framer-motion";
import Toggle from "./toggle";


const Sidebar: React.FC = () => {

    const { toggle, user, handleAddPostToggle, darkMode, toggleDarkMode, handleToggle } = useAppContext()
    const router = useRouter()
    const { links } = useLinks()

 

    const handleLogout = () => {

        signOut()

        if (!user) {

            router.push("/")

        }

    }

    const authorizedLinks =  links.map( link => <NavLink
                                                key={link.id}
                                                name={link.name}
                                                icon={link.icon}
                                                notification={link.notification}
                                                href={link?.link}
                                                />)
                                               
    const exploreLink = links.filter(link => link.name === "Explore").map(link => <NavLink
                                                                                    key={link.id}
                                                                                    name={link.name}
                                                                                    icon={link.icon}
                                                                                    notification={link.notification}
                                                                                    href={link?.link}
                                                                                    />)
       
   return <>

            {toggle && <div 
            className="w-[93px] h-full">
                
            </div>}

            <motion.div
                onClick={(e: React.MouseEvent ) => {
                    e.stopPropagation(); 
                  }}
                className={` ${toggle ? "sm:w-[400px] fixed z-[999]" : "sm:w-[90px] flex z-0"} nav`}>

                <div className="flex flex-col justify-between h-full">

                <div className="space-y-4">
                    
                { user ? authorizedLinks : exploreLink}

                { user &&
            
                <div className="space-y-8 flex flex-col justify-center">
                   
                <Button 
                clickEvent={handleAddPostToggle} 
                modifier="hover:text-white bg-gray-300
                hover:bg-gradient-to-r dark:bg-gray-800
                from-cyan-500 to-blue-500 capitalize" 
                text={toggle ? "Add post" : ""} 
                icon={faPlusCircle}/>

                </div>
                    
                    }

                </div>

                 <div 
                 className={`w-full left-0 relative ${!toggle && "h-16"}`}>
                    
                  { toggle ? <div 
                            className="gap-4 w-full rounded-lg bg-gray-300 dark:bg-gray-800 p-2 flex-col flex justify-between">

                 <div>

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
                  </div>

                 <div className={`flex justify-between ${ !user ? 'hidden' : ''}`}>

                        <div className="flex gap-2 text-sm items-center">
                            <Avatar 
                            userId={user?.id}
                            src={`${user?.profileImage !== null || '' ? user?.profileImage
                              : ('/vercel.svg')}`}
                            width="w-8"
                            />
                            <h1>{user?.name}</h1>

                        </div>

                    <Button
                    icon={faSignOut} 
                    text="Logout" 
                    clickEvent={handleLogout}/>
                                        
                    </div>

                    </div>

                    : 
                   
                    <div className={`grid place-items-center absolute w-full left-0 ${ !user ? 'hidden' : ''}`}>
                        <div className="relative">
                        <div 
                        onClick={handleToggle}
                        className="absolute top-0 bottom-0 left-0 right-0 z-20 cursor-pointer"></div>
                        <Avatar 
                        userId={user?.id}
                        src={`${user?.profileImage !== null || '' ? user?.profileImage
                        : ('/vercel.svg')}`}
                        />
                        </div>
                    </div>}
                    
                </div>

                </div>
                

            </motion.div>
  
         </>
};

export default Sidebar;
