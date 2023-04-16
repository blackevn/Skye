'use client';

import { faArrowAltCircleRight, faPlusCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import NavLink from "./navlink";
import { useAppContext } from "../context/AppContext"; 
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import Avatar from "./avatar";
import { useRouter } from "next/navigation";
import PostForm from "./Forms/postForm";
import { useLinks } from "../hooks";
import { motion } from "framer-motion";



const Sidebar = () => {

    const { toggle, user } = useAppContext()
    const { data: session } = useSession()
    const router = useRouter()
    const { links } = useLinks()

    const handleLogout = () => {

        signOut()

        if (!session?.user) {

            router.push("/auth")

        }

    }

    const authorizedLinks =  links.map( link => <NavLink
                                                key={link.id}
                                                name={link.name}
                                                icon={link.icon}
                                                notif={link.notification}
                                                href={link.link}
                                                />)

                                               
    const exploreLink = links.filter(link => link.name === "Explore")
    
    const unauthorizedLinks = exploreLink.map(link => <NavLink
                                                        key={link.id}
                                                        name={link.name}
                                                        icon={link.icon}
                                                        notif={link.notification}
                                                        />)
    
   return <>

            {toggle && <div className="w-[93px] h-full">
                
            </div>}

            <motion.div
            layout 
            transition={{ type: "spring", stiffness: 100 }} 
            className={` ${toggle ? "sm:w-[400px] fixed" : "sm:w-[90px] flex"} p-4 justify-between box-border bg-base-100 bottom-0 top-16 z-[9999]`}>

                <div className="flex flex-col justify-between h-full">

                <div className="space-y-4">
                    
                { session?.user ? authorizedLinks : unauthorizedLinks}

                { session?.user &&
                            
               
                <div className="space-y-8 flex flex-col justify-center">
                   
                 <Button  modifier=" hover:text-white hover:bg-blue-400 hover:bg-gradient-to-r from-cyan-500 to-blue-500 bg-gray-300" text={toggle ? "Add post" : ""} icon={faPlusCircle}/>

                </div>
                    
                    }

                </div>

                { session?.user && <div className={` w-full left-0 p-4 relative ${!toggle && "h-16"}`}>
                    
                  { toggle ? <div className="h-[150px] w-full rounded-lg bg-gray-300 p-4">

                    <div className="flex justify-between">

                    <Avatar src={session?.user?.image} image={session?.user?.image}/>
                    
                    <Button icon={faSignOut} text="Logout" clickEvent={handleLogout}/>
                                        
                    </div>

                    </div>

                    : 
                   
                    <div className=" grid place-items-center absolute w-full left-0"><Avatar src={session?.user?.image} image={session?.user?.image}/></div>}
                    
                </div> }

                </div>
                

            </motion.div>
  
         </>
};

export default Sidebar;
