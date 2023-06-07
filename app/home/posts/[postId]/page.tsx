'use client'

import { usePathname } from "next/navigation";
import PostsPage from "./PostsPage";

const Posts = () => {

  const pathname = usePathname();
  const postId = pathname?.toString().replace(/^\/home\/posts\//, "");

   return <div className="h-full">

            <PostsPage postId={postId}/>
            
          </div>;

};

export default Posts;
