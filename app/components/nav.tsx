'use client';

import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import NavLink from "./navlink";
import { useAppContext } from "../context/AppContext"; 
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";


const Sidebar = (  ) => {

    const { toggle, user } = useAppContext()
    

  return <>

            <div className={` ${toggle ? "sm:w-[400px] " : "sm:w-[90px]"} p-4 `}>

                <div className="space-y-4">
                    
                <NavLink name="Home" href="/home"/>

                <NavLink href="/home/posts" >

                    <div className="badge">New</div>

                </NavLink>

                <NavLink href="/home/settings" name="Home"/>

                {!user ?
                            
          <div className={`h-[150px] rounded-3xl p-4 relative shadow-xl ${ toggle ? "sm:block" :  "hidden" } w-full`} >

                    <p className="text-gray-500 font-semibold">Sign in to create posts, like, comment on other posts and follow others.</p>
                    
                    <Button 
                    icon={faArrowAltCircleRight}
                    text="Sign in" 
                    modifier="bg-gradient-to-r from-cyan-500 to-blue-500 absolute btn bottom-0 right-0 text-white m-4 "
                    clickEvent={signIn}
                    />
                  
                </div>

                :

                <div>

                     <NavLink name="Another"/>

                </div>
                    
                    }

                </div>
                

            </div>
  
         </>
};

export default Sidebar;
