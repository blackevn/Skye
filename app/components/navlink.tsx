import Link from "next/link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../context/AppContext"; 
import { NavigationLinks } from "@/types/interfaces";

import { usePathname } from "next/navigation";



const NavLink: React.FC<NavigationLinks> = (props) => {

  const { href = "/", name = "Link", icon = faHome, notification = 0, hasNotification} = props

  const { toggle } = useAppContext()
  const pathname = usePathname()
  const active = href === pathname
  


  return <>

      <div className="indicator w-full">

         { hasNotification && !toggle && notification > 0 && <span className="indicator-item badge badge-secondary">{notification}</span> }

            <Link className={`navLink indicator ${active ? 'bg-blue-500 text-white' : 'text-black'}`} href={href}>

          <div className="flex gap-4 items-center ">

                <FontAwesomeIcon icon={icon}/>
             
              {toggle &&  <p className="hidden sm:block">{name}</p>}

              </div>

              {toggle &&   <div className="hidden sm:block">
               
                {hasNotification && notification > 0 && <span className="badge">{notification}</span> }

              </div>}
            
            </Link>

          </div>

  
        </>
  
};


export default NavLink;
