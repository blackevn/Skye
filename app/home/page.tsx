'use client'

import Home from "./home";
import { usePosts } from "../hooks";
import { Loading } from "../components";
import { useAppContext } from "../context/AppContext";

const page = () => {

  const { posts } = useAppContext()
 
  if ( !posts) return <div className="h-full ">
                            <Loading/>
                      </div>

   
  return <div className="box-border p-0 m-0"><Home /></div>
};
 
export default page;
