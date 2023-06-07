import { useAddPost } from "@/app/hooks";
import Form from "../form";
import Button from "../button";
import TextArea from "../textarea";
import Avatar from "../avatar";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ImageUpload from "./imageUpload";
import { PostData } from "@/types/interfaces";


const AddPost = () => {

  const { defaultPrevent, handlePost, mutatePosts, 
          handleEditChange, user, postData, setPostData } = useAddPost()

   
  return <>
            <div className="lg:w-[400px] text-gray-600 dark:text-gray-200">

                <Form label="What's up" onSubmit={ defaultPrevent } modifier="font-medium ">
                  
                  <div className="flex gap-4 items-start">
                    
                  <Avatar
                  src={user?.profileImage}
                  />

                  <div className="space-y-4 w-full">

                      <TextArea  
                      type="text"
                      value={postData.body} 
                      modifier="w-full text-gray-600 font-bold" 
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
                  clickEvent={handlePost} 
                  text="Send" 
                  modifier="blueGradient" 
                  icon={faPaperPlane}/>
                  </div>     

                  </div>
                  </div>

                </Form>
            </div>
         </>
};

export default AddPost;
