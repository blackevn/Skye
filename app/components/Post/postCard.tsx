import { Post } from "@/types/interfaces";
import Button from "../button";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../context/AppContext";
import { useToggle } from "../../hooks";



const PostCard: React.FC<Post> = ({ body, image }) => {

  const [ likePostToggle, handleLikePostToggle ] = useToggle(false)

  const likeIcon = likePostToggle ? faHeartSolid : faHeart;  

  return <div className=" w-full p-4 min-h-[200px] rounded-3xl flex flex-col justify-between">

          <div>
            <div className="space-y-4">
            <p className="text-lg lg:text-3xl font-thin">{body}</p>
            <div  className="grid place-items-center w-full">
            <img
             src={image}
             className="rounded-2xl"
             />
             </div>
            </div>
          </div>
          <div className="w-full">
              <div className='border w-full border-gray-400 rounded-full mt-4 mb-4'></div> 
          <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-4">

            <Button 
            modifier={`bg-gray-500/20 p-0 ${likePostToggle ? "text-red-500 bg-red-500/20" : "bg-gray-500/20"}`}  
        icon={likeIcon} 
            text="" 
            clickEvent={handleLikePostToggle}/>

            <Button modifier="bg-gray-500/20 p-0"  icon={faComment} text=""/>
            </div>
            <div>
            <Button modifier="bg-gray-500/20 p-0"  icon={faShareAlt} text=""/>
            </div>
          </div>
          </div>

        </div>;
};

export default PostCard;
