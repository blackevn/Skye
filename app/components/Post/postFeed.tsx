import { Post } from "@/types/interfaces";
import React from "react";
import PostCard from "./postCard";
import Loading from "../loading";
import { IndexType } from "typescript";
import { motion } from "framer-motion";

type PostFeedProps = {
    posts?: Post
}

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
  
    const postFeed = posts?.map( (post: Post, i: number )  =>

                                                    <motion.div
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
  
                                                        />
                                                    </motion.div>
                                                    )

        return <>

          <div className="grid w-full h-full gap-4 snap-y snap-mandatory overflow-y-scroll hideScrollBar">

            {postFeed.length >= 1 ? 
            
                postFeed
            
            : 

            <Loading/>
            
            }

            </div>

    </>
}

export default PostFeed;
