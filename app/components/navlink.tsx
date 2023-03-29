import Link from "next/link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../context/AppContext"; 

const NavLink = (props: any) => {

  const { href, children, name } = props

  const { toggle } = useAppContext()


  return <>

            <Link className={`navLink  `} href={href}>

              <div className="flex gap-4 items-center ">

              <FontAwesomeIcon icon={faHome}/>

              {toggle &&  <p className="hidden sm:block ">{name}</p>}

              </div>

            {toggle &&   <div className="hidden sm:block">
               
                {children}

              </div>}
            
            </Link>
  
        </>
  
};

NavLink.defaultProps = {

  href: "/",
  name: "Link"

}

export default NavLink;
