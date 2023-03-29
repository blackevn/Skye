import { faSearch, faHome, faCompass, faPlusCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const BottomNav = () => {

    const links = [
        
                   {
                    "id": 1,
                    "name": "home link",
                    "link": "/home",
                    "icon": faHome
                   },
                   {
                    "id": 2,
                    "name": "home link",
                    "link": "/home/posts",
                    "icon": faCompass
                   },
                   {
                    "id": 3,
                    "name": "home link",
                    "link": "/auth",
                    "icon": faPlusCircle
                   },
                   {
                    "id": 4,
                    "name": "home link",
                    "link": "/home/about",
                    "icon": faSearch
                   },
                   {
                    "id": 5,
                    "name": "home link",
                    "link": "/home/settings",
                    "icon": faUser
                   },
                  
                
                  ]

  return <>

            <div className="fixed flex bottom-0 w-screen p-4 justify-between items-center text-xl bg-white">

               {
                
                links.map(link => <Link key={link.id} href={link.link}>
                                    <FontAwesomeIcon icon={link.icon}/>
                                  </Link>)

               }
                
            </div>
  
        </>


}

export default BottomNav;
