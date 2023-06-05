'use client'

import { Button, Input, Loading, PostCard } from "@/app/components";
import { usePost } from "@/app/hooks";
import { useRouter } from "next/navigation";
import { faArrowAltCircleLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";

type PostPageProps = {

  postId?: string

}

const PostsPage: NextPage<PostPageProps> = ({ postId }) => {

const router = useRouter()

const { data: post } = usePost( postId as string )

if (!post) return <Loading/>

            
  return <>

          <div
           onClick={(e: React.MouseEvent ) => {
              e.stopPropagation(); 
            }}
            >
            <div className="w-full border-b border-gray-800 dark:border-white">
            <Button 
              clickEvent={(e: React.MouseEvent ) => {
                e.stopPropagation(); 
                router.back()
              }}
            text="Back" 
            icon={faArrowAltCircleLeft}/>
            </div>

            <div>
            <PostCard
            image={post?.image}
            body={post?.body}
            id={post?.id}
            userId={post?.user?.id}
            user={post?.user}
            comments={post?.comments}
            likedIds={post?.likedIds}
            />
            </div>

          </div>
  
         </>
};

export default PostsPage;
