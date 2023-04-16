import Link from "next/link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../context/AppContext"; 
import { useSession } from "next-auth/react";


const NavLink = (props: any) => {

  const { href = "/", name = "Link", icon = faHome, notif = 0} = props

  const { toggle } = useAppContext()
 const { data: session} = useSession()

  return <>

            <Link className={`navLink  `} href={href}>

              <div className="flex gap-4 items-center ">

              <FontAwesomeIcon icon={icon}/>

              {toggle &&  <p className="hidden sm:block ">{name}</p>}

              </div>

            {toggle &&   <div className="hidden sm:block">
               
                {session?.user && notif > 0 && <span className="badge">{notif}</span> }

              </div>}
            
            </Link>
  
        </>
  
};


export default NavLink;
