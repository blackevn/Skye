'use client';

import { faBars, faXmark, faArrowAltCircleRight, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Toggle from "./toggle";
import { useAppContext } from "../context/AppContext";
import { useSideContext } from "../context/SideAdContext";
import Button from "./button";
import { useWidth } from "../hooks";
import Link from "next/link";

const Nav = () => {

    const { toggle, handleToggle, user } = useAppContext()
    const [ width ] = useWidth()
    const { handleSideToggle, sideToggle } = useSideContext()
   

  return <>

  <div className="fixed top-0 z-[999] w-screen box-border bg-base-100">

            { width <= 700 && <div className={` ${toggle ? "block" : "hidden"} p-8`}>

            <p className="text-gray-500 font-semibold">Sign in to create posts, like, comment on other posts and follow others.</p>

            </div> }

            <div className="px-4 sm:px-9 py-4 flex justify-between items-center">

                <div className="flex gap-8">

                <Toggle
                    on={faXmark}
                    off={faBars}
                    checked={toggle}
                    toggleEvent={handleToggle}
                />

                <p className="font-black text-2xl">blackevn</p>
                
                </div>

               <div className="hidden lg:grid place-items-center">

                <Toggle
                    on={faAngleRight}
                    off={faAngleLeft}
                    checked={sideToggle}
                    toggleEvent={handleSideToggle}
                    />

              </div>
              { !user && <div className={`${ width <= 700 ? "block" : "hidden" } `}>

                <Link href="/">
                  <Button 
                    icon={faArrowAltCircleRight}
                    text="Sign in" 
                    modifier="bg-gradient-to-r from-cyan-500 to-blue-500 btn bottom-0 right-0 text-white"
                    />
                </Link>

                </div> }


            </div>

            </div>
  
        </>

};

export default Nav;