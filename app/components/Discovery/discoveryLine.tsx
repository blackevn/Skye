import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLinks } from "../../hooks";
import Link from "next/link";


const DiscoveryLine = () => {

    const { discovery } = useLinks()

  return <>

        <div className="flex lg:hidden gap-4 px-4">
  
            { discovery.map( discover =>  <Link key={discover.id} href={`/?topic=${discover.name}`}>

            <span className="badge gap-2 p-4">

                    {discover.name}<FontAwesomeIcon icon={discover.icon}/>

            </span>

            </Link>

            )}
       
       </div>

         </>
}

export default DiscoveryLine
