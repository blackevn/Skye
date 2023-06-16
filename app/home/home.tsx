"use client"

import { People, PostFeed } from "../components";
import { useAppContext } from "../context/AppContext";
import { usePosts } from "../hooks";


const Home = () => {

  const { width, users } = useAppContext()

  const {data: posts, containerRef} = usePosts(users?.id as string)

      return <div 
          ref={containerRef} 
          className="box-border max-w-[100%] mb-20 lg:mb-0">
             
          {/* <div className=" w-full box-border overflow-hidden p-2">
           {session?.user && <DiscoveryLine/>}
            </div> */}

            <div className="min-h-[80vh] w-full grid place-items-center">
                <PostFeed posts={posts}/>
            </div>

           <div className="block my-4 lg:hidden p-4">
                <People/>
           </div>
     
        </div>

}



export default Home;
