import { Post } from "@/types/interfaces";
import React from "react";
import PostCard from "./postCard";
import Loading from "../loading";
import { motion } from "framer-motion";

type PostFeedProps = {
    posts?: Post
}

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
  
    const postFeed = posts?.map( (post: Post, i: number )  =>

                            <motion.div
                            key={post?.id}
                            initial={{
                                y: 20,
                                opacity: 0.5
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: i * 0.2,
                                    ease: 'easeIn'
                                }
                            }}
                            >
                              
                                <PostCard 
                                   image={post?.image}
                                   body={post?.body}
                                   id={post?.id}
                                   userId={post?.user?.id}
                                   user={post?.user}
                                   comments={post?.comments}
                                   likedIds={post?.likedIds}
                                />
                              
                            </motion.div>
                            )

        return <>

          <div className="grid w-full h-full gap-4 hideScrollBar">

            {postFeed?.length >= 1 ? 
            
                postFeed
            
            : 
        
                <Loading/>
                 
            }

            </div>

    </>
}

export default PostFeed;
