'use client';

import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import NavLink from "./navlink";
import { useAppContext } from "../context/AppContext"; 
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import Avatar from "./avatar";


const Sidebar = (  ) => {

    const { toggle, user } = useAppContext()
    const { data: session } = useSession()
    


  return <>

            <div className={` ${toggle ? "sm:w-[400px] " : "sm:w-[90px]"} p-4 relative flex flex-col justify-between`}>

                <div className="space-y-4">
                    
                <NavLink name="Home" href="/home"/>

                <NavLink href="/home/posts" >

                    <div className="badge">New</div>

                </NavLink>

                <NavLink href="/home/settings" name="Home"/>

                {!session?.user ?
                            
                <div className={`h-[150px] rounded-3xl p-4 relative shadow-xl ${ toggle ? "sm:block" :  "hidden" } w-full`} >

                    <p className="text-gray-500 font-semibold">Sign in to create posts, like, comment on other posts and follow others.</p>
                   <Link  href="/auth"> 
                    <Button 
                    icon={faArrowAltCircleRight}
                    text="Sign in" 
                    modifier="bg-gradient-to-r from-cyan-500 to-blue-500 absolute btn bottom-0 right-0 text-white m-4 "
                    />
                    </Link>                  
                </div>

                :

                <div>

                     <NavLink name="Another"/>

                </div>
                    
                    }

                </div>

                { session?.user && <div className="absolutebottom-0 w-full left-0 p-4">
                    
                  { toggle ? <div className="h-[100px] w-full rounded-lg bg-gray-400 ">
                    
                    <Button clickEvent={signOut}/>
                    
                    </div>

                   : 
                   
                   <div className="w-full grid place-items-center pr-4"><Avatar src={session?.user?.image} image={session?.user?.image}/></div>}
                    
                </div> }
                

            </div>
  
         </>
};

export default Sidebar;
