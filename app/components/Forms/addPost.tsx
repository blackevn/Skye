import { useAddPost } from "@/app/hooks";
import Form from "../form";
import Button from "../button";
import Input from "../input";
import TextArea from "../textarea";
import Avatar from "../avatar";
import { useAppContext } from "@/app/context/AppContext";
import { faPaperPlane, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ImageUpload from "./imageUpload";
import { EditData, PostData } from "@/types/interfaces";


const AddPost = () => {

  const { defaultPrevent, handlePost, mutatePosts, 
          handleEditChange, user, postData, setPostData } = useAddPost()

  console.log(postData);
   
 
  return <>
            <div className="lg:w-[400px]">

                <Form label="What's up" onSubmit={ defaultPrevent } modifier="font-medium">
                  
                  <div className="flex gap-4 items-start">
                    
                  <Avatar
                  src={user?.profileImage}
                  />

                  <div className="space-y-4 w-full">

                      <TextArea  
                      type="text"
                      value={postData.body} 
                      modifier="w-full text-white font-bold" 
                      placeholder="..."
                      name="body"
                      onChange={handleEditChange}
                      />  

                      <ImageUpload  
                      label="Add Photo" 
                      onChange={ image => setPostData((prevData: PostData) => ({...prevData, image: image}))}
                      value={postData.image}
                      name="image"
                      />

                  <div className="w-full flex justify-end">
                  <Button 
                  clickEvent={handlePost} text="Send" modifier="bg-white bg-blue-400 bg-gradient-to-r from-cyan-500 to-blue-500 text-white" 
                  icon={faPaperPlane}/>
                  </div>     

                  </div>
                  </div>

                </Form>
            </div>
         </>
};

export default AddPost;
