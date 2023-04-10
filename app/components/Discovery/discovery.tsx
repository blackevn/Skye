import { useLinks } from "@/app/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


const DiscoveryPanel = () => {

    const { discovery } = useLinks()

  return <>
            <div className="w-full space-y-4">
                <h1>Discovery</h1>

                <div className="flex flex-wrap gap-1">

                    { discovery.map( discover =>  <Link key={discover.id} href={`/?topic=${discover.name}`}>

                                                    <span className="badge gap-2 p-4">

                                                             {discover.name}<FontAwesomeIcon icon={discover.icon}/>

                                                    </span>

                                                </Link>
                                              
                                                )}
                </div>
            </div>
        </>
};

export default DiscoveryPanel;
