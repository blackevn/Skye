import { NavigationLinks } from "@/types/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useNav } from "../hooks";

const BottomNav = () => {

  const { links } = useNav()

   return <>

            <div className="fixed flex bottom-0 w-screen p-4 justify-between items-center text-xl bg-white">

               {
                
                links.map((link: any ) => <Link key={link.id} href={link.link}>
                                    <FontAwesomeIcon icon={link.icon}/>
                                  </Link>)

               }
                
            </div>
  
        </>


}

export default BottomNav;
