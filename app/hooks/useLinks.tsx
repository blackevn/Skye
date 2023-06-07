import { faSearch, faHome, faCompass, faPlusCircle, faUser, 
         faStar, faCircle, faGamepad, faHatCowboy,faTShirt, 
         faTools, faLaptop, faCarrot, faMusic, faCar, faBell 
} from "@fortawesome/free-solid-svg-icons";
import { DiscoveryLinks, NavigationLinks } from "@/types/interfaces";
import { useAppContext } from "../context/AppContext";



const useLinks = () => {

    const { user } = useAppContext()

    const links: NavigationLinks[] = [
        
        {
         "id": 1,
         "name": "Home",
         "link": "/home",
         "icon": faHome,
         "notification": 0,
         "isAuthenticated": false,
         "hasNotification": false
        },
        {
         "id": 2,
         "name": "Explore",
         "link": "/home/posts",
         "icon": faCompass,
         "notification": 0,
         "isAuthenticated": true,
         "hasNotification": false
        },
        {
         "id": 3,
         "name": "Notifications",
         "link": "/home/notifications",
         "icon": faBell,
         "notification": 3,
         "isAuthenticated": true,
         "hasNotification": user?.hasNotification
        },
        {
         "id": 4,
         "name": "Search",
         "link": "/home/about",
         "icon": faSearch,
         "notification": 0,
         "isAuthenticated": true,
         "hasNotification": false
        },
        {
         "id": 5,
         "name": "Link",
         "link": "/home/settings",
         "icon": faCircle,
         "notification": 1,
         "isAuthenticated": true,
         "hasNotification": false
        },
       
     
       ]

    const discovery: DiscoveryLinks[] = [
        
        {
         "id": 1,
         "name": "Gaming",
         "icon": faGamepad
        },
        {
         "id": 2,
         "name": "Lifestyle",
         "icon": faHatCowboy
        },
        {
         "id": 3,
         "name": "Fashion",
         "icon": faTShirt
        },
        {
         "id": 4,
         "name": "DIY",
         "icon": faTools
        },
        {
         "id": 5,
         "name": "Technology",
         "icon": faLaptop
        },
        {
         "id": 6,
         "name": "Cooking",
         "icon": faCarrot
        },
        {
         "id": 7,
         "name": "Music",
         "icon": faMusic
        },
        {
         "id": 8,
         "name": "Cars",
         "icon": faCar
        },
    
    ]   

       return {links, discovery}

}

export default useLinks;
