import { faSearch, faHome, faCompass, faPlusCircle, faUser, faStar, faCircle, faGamepad, faHatCowboy, faTShirt, faTools, faLaptop, faCarrot, faMusic, faCar } from "@fortawesome/free-solid-svg-icons";
import { DiscoveryLinks, NavigationLinks } from "@/types/interfaces";
const useLinks = () => {

    const links: NavigationLinks[] = [
        
        {
         "id": 1,
         "name": "Home",
         "link": "/home",
         "icon": faHome,
         "notification": 0,
         "new": true
        },
        {
         "id": 2,
         "name": "Explore",
         "link": "/home/posts",
         "icon": faCompass,
         "notification": 1,
         "new": true
        },
        {
         "id": 3,
         "name": "Star",
         "link": "/home",
         "icon": faStar,
         "notification": 3,
         "new": true
        },
        {
         "id": 4,
         "name": "Search",
         "link": "/home/about",
         "icon": faSearch,
         "notification": 5,
         "new": true
        },
        {
         "id": 5,
         "name": "Link",
         "link": "/home/settings",
         "icon": faCircle,
         "notification": 1,
         "new": true
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
