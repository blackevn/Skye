import { AnimationControls, motion } from "framer-motion";
import Button from "../button";
import Input from "../input";
import { useState } from "react";
import { usePost, usePosts, useVariants } from "@/app/hooks";
import { faComment, faTriangleExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Comments } from "@/types/interfaces";
import axios from "axios";
import { toast } from "react-hot-toast";
import Toast from "../toast/toast";


type CommentsProps = {
 cardWidth?: number
 cardPosition?: number   
 commentsToggle?: boolean 
 handleCommentsToggle?: () => void
 commentsController: AnimationControls
 comments?: Comments
 postId?: string
}

 const Comments: React.FC<CommentsProps> = ({ cardWidth, cardPosition, comments, handleCommentsToggle, commentsController, postId }) => {
 const { commentsVariants, commentsVariantsChildren } = useVariants()
 const [ postComment, setPostComments ] = useState<Record<string, any>>({ body: ''})
 const { mutate: mutatedComments } = usePost(postId as string)
 const { mutate: mutatedComment } = usePosts()

 const sendComment = () => {
  
   axios.post(`/api/comments?postId=${postId}`, postComment)
   .then(res => toast.custom(<Toast
    text={JSON.stringify(res)}
    modifier="bg-green-500 text-white"
    icon={faTriangleExclamation}
    />))
   .catch( error => toast.custom(<Toast
    text={error.message}
    modifier="bg-orange-500 text-white"
    icon={faTriangleExclamation}

    />)) 
    
    mutatedComments()
    mutatedComment()

 }

 console.log(comments);

comments?.map((item: Comment) => (console.log(item)))
 
  
    return <>
    <motion.div
        variants={commentsVariants}
        animate={commentsController}
        id="commentsDiv"
        onClick={handleCommentsToggle}
        className="z-[998] w-screen h-screen absolute bottom-0 left-0 right-0 top-0 overflow-hidden ">  

        <motion.div
        variants={commentsVariantsChildren}
        animate={commentsController}
        className={`absolute bottom-0 mophBg p-4 m-auto rounded-t-3xl`}
        // ref={commentDivRef}
        style={{
            width: `${cardWidth}px`,
            translateX: `${cardPosition}px`
        }}
        onClick={(e: React.MouseEvent ) => {
          e.stopPropagation(); 
        }}
            >
              <div className="flex justify-between items-start w-full">
              <h1 className='text-3xl'>Comments</h1>
              <Button clickEvent={handleCommentsToggle} text="" icon={faXmark}/>
              </div>

              <div className="max-h-[500px] min-h-[500px] lg:min-h-[200px] overflow-hidden ">

               { comments?.length >= 1 ?

                <div>
                  {comments?.map((comment: Comments) => {
                    <h1>{comment?.body}</h1>
                  })}
                </div>

                :

               <div className="grid place-items-center h-full w-full">
                <h1 className='text-center text-2xl'>No comments</h1>
                </div> }
              </div>

              <div className="flex gap-4 px-4">
              <Input 
              placeholder='Comment...'
              modifier='w-full bg-transparent'
              value={postComment.body}
              name='postComment'
              onChange={ (e: any) => 
                setPostComments(prevValue => ({...prevValue, body: e.target.value}))
              }
              />
              
              <Button 
              text="Comment" 
              icon={faComment} 
              modifier="blueGradient btn"
              clickEvent={sendComment}
              />
            </div>
         </motion.div>
        </motion.div>
        </>
};

export default Comments;
