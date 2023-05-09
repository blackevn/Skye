'use client';

import { faBars, faXmark, faArrowAltCircleRight, faAngleLeft, faAngleRight, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Toggle from "./toggle";
import { useAppContext } from "../context/AppContext";
import { useSideContext } from "../context/SideAdContext";
import Button from "./button";
import { useWidth } from "../hooks";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"
import UserDropdown from "./userDropdown";

const Nav = () => {

    const { toggle, handleToggle, user } = useAppContext()
    const [ width ] = useWidth()
    const { handleSideToggle, sideToggle } = useSideContext()
    const { data: session } = useSession()
  
  return <>

  <div className="fixed top-0 z-[995] w-screen box-border bg-base-100">

            { width <= 700 && <div className={` ${toggle ? "block" : "hidden"} p-8`}>

            <p className="text-gray-500 font-semibold">Sign in to create posts, like, comment on other posts and follow others.</p>

            </div> }

            <div className="pr-4 pl-4 sm:px-9 py-4 flex justify-between items-center">

                <div className="flex gap-8">

                <Toggle
                    on={faXmark}
                    off={faBars}
                    checked={toggle}
                    toggleEvent={handleToggle}
                />

                <p className="font-black text-2xl">Skye</p>
                
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
                  <div className=" text-white">
                  <h1 className="font-bold text-xl text-white">{user?.name}</h1>
                  <h1 className="font-bold text-lg">{user?.email}</h1>
                  </div>
                  <Button clickEvent={() => signOut({callbackUrl: '/', redirect: true})} modifier="btn" text="Sign out" icon={faSignOut}/>
                </UserDropdown>
                </div>

                 }

                </div> 
          
                {/* <div className="hidden lg:grid place-items-center">

                <Toggle
                    on={faAngleRight}
                    off={faAngleLeft}
                    checked={sideToggle}
                    toggleEvent={handleSideToggle}
                    />

                </div> */}
          
                </div>

            </div>

            </div>
  
        </>

};

export default Nav;
