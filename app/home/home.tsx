"use client"

import { useEffect, useRef, useState } from "react";
import { People, PostFeed } from "../components";
import { useAppContext } from "../context/AppContext";


let elementWidth: number

const Home = () => {

  const { posts, width } = useAppContext()
  const homeDivRef = useRef<any>(() => 0)
  const [ homeWidth, setHomeWidth ] = useState<number>(0)

  elementWidth = homeWidth

 useEffect(() => {
  
     const home = homeDivRef.current.getBoundingClientRect().width
     setHomeWidth(home)

    }, [width]);
  
      return <div 
          ref={homeDivRef} 
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


export {elementWidth}


export default Home;
