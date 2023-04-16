"use client"

import { NextPage } from "next";
import { DiscoveryLine, VideoCard } from "../components";
import { useSession } from "next-auth/react";
import { Video } from "@/types/interfaces";

interface VProps {

  videos: Video[];

}

const Home: NextPage<VProps> = ({ videos} ) => {

  const { data: session} = useSession()

  const dummyArray = [1, 2, 3, 4, 5, 6]

 const videoFeed = videos.map( (video: Video) => <VideoCard key={video._id} video={video} />)

  return <div className="box-border relative max-w-[100%]">
          
          {/* <div className=" w-full box-border overflow-hidden p-2">
           {session?.user && <DiscoveryLine/>}
          </div> */}

           <div className="grid w-full h-full gap-4 snap-y snap-mandatory overflow-y-scroll">

            {videos.length <= 1 ? 
           
              videoFeed
            
            : 
                  <button className="btn btn-square loading "></button>
           
            }
       
           </div>
     
        </div>;
};

export default Home;
