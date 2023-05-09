"use client"

import { DiscoveryLine, VideoCard, PostCard, Loading, People } from "../components";
import { useSession } from "next-auth/react";


const Home = () => {

  const { data: session} = useSession()

  const dummyArray = [ 1, 2, 3, 4, 5, 6 ]

  const videoFeed = dummyArray.map( video  => <PostCard/>)

 
  return <div className="box-border relative max-w-[100%] mb-20">
             
          {/* <div className=" w-full box-border overflow-hidden p-2">
           {session?.user && <DiscoveryLine/>}
          </div> */}

           <div className="grid w-full h-full gap-4 snap-y snap-mandatory overflow-y-scroll">

            {dummyArray.length >= 1 ? 
           
              videoFeed
            
            : 
                <Loading/>
           
            }
       
           </div>

           <div className="block my-4 lg:hidden ">
            <People/>
           </div>
     
        </div>;
}

export default Home;
