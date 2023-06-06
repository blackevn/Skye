import { NavigationLinks } from "@/types/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useLinks } from "../hooks";
import { usePathname } from "next/navigation";

const BottomNav = () => {

  const { links } = useLinks()
  const pathname = usePathname()
   
   return <>

            <div className="fixed flex bottom-0 w-screen px-8 py-4 justify-between items-center text-xl bg-white dark:bg-black z-[90]">

               {
                
                links.map((link: any ) => <Link key={link.id} href={link.link}>
                                            <FontAwesomeIcon 
                                            className={`${link.link === pathname && 'text-blue-500'}`} 
                                            icon={link.icon}/>
                                           </Link>)

               }
                
            </div>
  
        </>


}

export default BottomNav;
