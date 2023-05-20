import Link from "next/link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../context/AppContext"; 
import { NavigationLinks } from "@/types/interfaces";
import React from "react";


const NavLink: React.FC<NavigationLinks> = (props) => {

  const { href = "/", name = "Link", icon = faHome, notification = 0, isAuthenticated} = props

  const { toggle, user } = useAppContext()

  return <>

            <Link className={`navLink`} href={href}>

              <div className="flex gap-4 items-center ">

              <FontAwesomeIcon icon={icon}/>

              {toggle &&  <p className="hidden sm:block">{name}</p>}

              </div>

              {toggle &&   <div className="hidden sm:block">
               
                {user && notification > 0 && <span className="badge">{notification}</span> }

              </div>}
            
            </Link>
  
        </>
  
};


export default NavLink;
