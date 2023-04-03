import { faSearch, faHome, faCompass, faPlusCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavigationLinks } from "@/types/interfaces";
const useNav = () => {

    const links: NavigationLinks[] = [
        
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

       return {links}

}

export default useNav;
