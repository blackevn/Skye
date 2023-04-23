"use client"

import { DiscoveryLine, VideoCard } from "../components";
import { useSession } from "next-auth/react";


const Home = () => {

  const { data: session} = useSession()

  const dummyArray = [ 1, 2, 3, 4, 5, 6 ]

  const videoFeed = dummyArray.map( video  => <VideoCard/>)

 
  return <div className="box-border relative max-w-[100%]">
             
          {/* <div className=" w-full box-border overflow-hidden p-2">
           {session?.user && <DiscoveryLine/>}
          </div> */}

           <div className="grid w-full h-full gap-4 snap-y snap-mandatory overflow-y-scroll">

            {dummyArray.length >= 1 ? 
           
              videoFeed
            
            : 
                  <button className="btn btn-square loading"></button>
           
            }
       
           </div>
     
        </div>;
}

export default Home;
