import { Post } from "@/types/interfaces";
import Button from "../button";
import { motion, useAnimationControls } from "framer-motion";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH, faHeart as faHeartSolid, faShare, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../context/AppContext";
import { useCurrentUser, useToggle, useLike, useVariants } from "../../hooks";
import Avatar from "../avatar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { elementWidth as homeWidth } from "@/app/home/home";
import Input from "../input";
import Comments from "../Comments/comments";

const PostCard: React.FC<Post> = ({ ...props }) => {

 
  const [ likePostToggle, handleLikePostToggle ] = useToggle(false)
  const [ commentsToggle, handleCommentsToggle ] = useToggle(false)
  const { user, width } = useAppContext()
  const { toggleLike, hasLiked } = useLike({postId: props.id, userId: user?.id})
  const { data: currentUser } = useCurrentUser()
  const { commentsVariants, commentsVariantsChildren } = useVariants()
  const commentsController = useAnimationControls()
  const postDivRef = useRef<any>(() => 0)
  // const commentDivRef = useRef<HTMLDivElement>(document.getElementById('someDiv'));
  const [ cardWidth, setCardWidth ] = useState<number>(0)
  const [ cardPosition, setCardPosition ] = useState<number>(0)



  const onLike = () => {
    handleLikePostToggle()
    toggleLike()
  }
  
  useEffect(() => {
    const card = postDivRef.current.getBoundingClientRect().width
    const position = postDivRef.current.getBoundingClientRect().x
    // commentDivRef.current.style.width = `${card}px`
    setCardWidth(card)
    setCardPosition(position)
   }, [commentsToggle, handleCommentsToggle]);


   useEffect(() => {
    if(commentsToggle ) {
     commentsController.start('show')
         
    }
   }, [commentsToggle]);


   useEffect(() => {
    if(!commentsToggle ) {
     commentsController.start('hidden')

    }   
   }, [!commentsToggle]);


   
  return  <div 
           ref={postDivRef}
           onClick={(e: React.MouseEvent ) => {
                e.stopPropagation(); 
              }}
          className=" w-full p-4 ">
            
          <div>
            <div className="space-y-4 ">
              <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <Avatar 
                width="w-10 lg:w-11"
                src={props?.user?.profileImage}
                userId={props?.user?.id}
                />
              <div>
                <h1 className="font-bold">{props?.user?.name}</h1>
                <h1>@{props?.user?.userName}</h1>
              </div>
              </div>

              <div>
               { props?.user?.id === currentUser?.id && <Button text='' icon={faEllipsisH}/>}
              </div>
              </div>
              <p className="text-lg lg:text-3xl font-thin pb-4">{props?.body}</p>

           <Link href={`/home/posts/${props?.id}`}>
            <div  className="grid place-items-center w-full">
            <img
             src={props?.image}
             className="rounded-lg lg:rounded-2xl max-h-[500px]"
             />
             </div>
             </Link>
             
            </div>
          </div>

          <div className="w-full">
              <div className='border w-full border-gray-400 rounded-full mt-4 mb-4'></div> 
          <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-4">

            <Button 
            modifier={`bg-gray-500/20 p-0 
            ${likePostToggle ? "text-red-500 bg-red-500/20" 
            : "bg-gray-500/20"} 
            ${ hasLiked && "text-red-500 bg-red-500/20"} `}  
            icon={ hasLiked && likePostToggle ? faHeartSolid : faHeart} 
            text={ props?.likedIds?.length >= 1 ? props?.likedIds?.length.toString() : ''} 
            clickEvent={onLike}/>

            <Button 
            clickEvent={handleCommentsToggle} 
            modifier="bg-gray-500/20 p-0"  
            icon={faComment} text=""/>

            </div>
            <div>
            <Button modifier="bg-gray-500/20 p-0"  icon={faShare} text=""/>
            </div>
          </div>
          </div>
              
          <Comments
          cardPosition={cardPosition}
          cardWidth={cardWidth}
          commentsController={commentsController}
          handleCommentsToggle={handleCommentsToggle}
          comments={props?.comments}
          postId={props?.id}
          />

        </div>
};

export default PostCard;
