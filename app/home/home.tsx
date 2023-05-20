"use client"

import { DiscoveryLine, People, PostFeed } from "../components";
import { useAppContext } from "../context/AppContext";


const Home = () => {

  const { posts } = useAppContext()
 
  return <div className="box-border relative max-w-[100%] mb-20">
             
          {/* <div className=" w-full box-border overflow-hidden p-2">
           {session?.user && <DiscoveryLine/>}
          </div> */}

            <PostFeed posts={posts}/>

           <div className="block my-4 lg:hidden p-4">
            <People/>
           </div>
     
        </div>;
}

export default Home;
