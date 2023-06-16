import { Post, Comments as CommentsType } from "@/types/interfaces";
import Button from "../button";
import { useAnimationControls } from "framer-motion";
import {  faHeart, faCommentAlt as faCommentAltRegular } from "@fortawesome/free-regular-svg-icons";
import { faArrowCircleRight, faCommentAlt, faEllipsisH, faHeart as faHeartSolid, faShare } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../context/AppContext";
import { useCurrentUser, useToggle, useLike, useVariants } from "../../hooks";
import Avatar from "../avatar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Comments from "../Comments/comments";
import { toast } from "react-hot-toast";
import Toast from "../toast/toast";

const PostCard: React.FC<Post> = ({ ...props }) => {

 
  const [ likePostToggle, handleLikePostToggle ] = useToggle(false)
  const [ commentsToggle, handleCommentsToggle ] = useToggle(false)
  const { user, width } = useAppContext()
  const { toggleLike, hasLiked } = useLike({postId: props.id, userId: user?.id})
  const { data: currentUser } = useCurrentUser()
  const commentsController = useAnimationControls()
  const postDivRef = useRef<any>(() => 0)
  const [ cardWidth, setCardWidth ] = useState<number>(0)
  const [ cardPosition, setCardPosition ] = useState<number>(0)
  const pathname = usePathname()
  const router = useRouter()

  const include = pathname?.includes('posts') || pathname?.includes('profile') 
  const onLike = () => {

    if(currentUser){ 
        handleLikePostToggle()
        toggleLike()} else {

        toast.custom((t: any) => (<Link href={`/`}>
                                  <Toast
                                    text="Sign in to like post"
                                    icon={faArrowCircleRight}
                                    modifier="bg-blue-500 text-white"
                                    />
                                  </Link>))
        }
      }
  
  useEffect(() => {
    const card = postDivRef.current.getBoundingClientRect().width
    const position = postDivRef.current.getBoundingClientRect().x
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
            modifier={`mophBg p-0 
            ${ likePostToggle ? "text-red-500 bg-red-500/20" 
            : "mophBg"} 
            ${ hasLiked && "text-red-500 bg-red-500/20"} `}  
            icon={ hasLiked || likePostToggle ? faHeartSolid : faHeart} 
            text={ props?.likedIds?.length >= 1 ? props?.likedIds?.length.toString() : ''} 
            clickEvent={onLike}/>

            <Button 
            clickEvent={handleCommentsToggle} 
            modifier="mophBg p-0"  
            icon={ commentsToggle ? faCommentAlt : faCommentAltRegular} 
            text={ props?.comments?.length >= 1 ? props?.comments?.length.toString() : ''}
            />

            </div>
            <div>
            <Button modifier="mophBg p-0"  icon={faShare} text=""/>
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
