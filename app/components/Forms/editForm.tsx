import { EditData } from "@/types/interfaces";
import { useAppContext } from "@/app/context/AppContext";
import Button from "../button";
import { faUser, faXmark} from "@fortawesome/free-solid-svg-icons";
import GroupedInput from "../groupedInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextArea from "../textarea";
import ImageUpload from "./imageUpload";
import { useEditProfile, useVariants } from "@/app/hooks";
import { AnimationControls, motion } from "framer-motion";
import { useEffect } from "react";

  type EditFormProps = {
    controller: AnimationControls
  }


  const EditForm: React.FC<EditFormProps> = ({ controller }) => {

  const { handleEditProfileToggle, editProfileToggle  } = useAppContext()
  const { editData, setEditData, handleEdit } = useEditProfile()
  const { editPostVariants } =  useVariants()

          console.log(editData);

          useEffect(() => {
            if (!editProfileToggle) {
              controller.start('hidden');
            }
          }, [!editProfileToggle]);

    return <motion.div
          animate={controller}
          variants={editPostVariants}
          initial='hidden'
          className="text-gray-600 fixed top-0 right-0 bottom-0 w-full md:w-[70%] lg:w-[50%] h-full mophBg z-[999] p-4 rounded-l-2xl space-y-4">

          <Button 
          modifier="text-2xl p-0 m-0" 
          clickEvent={
            handleEditProfileToggle
          } 
          text="" 
          icon={faXmark} />

          <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold ">Edit Profile</h1>
          <Button text='Save' modifier="bg-white" clickEvent={handleEdit}/>
          </div>

          <div className="grid grid-cols-2 gap-2">
         
          <GroupedInput   
          type="text"
          placeholder="Name"
          name="name"
          value={editData.name}
          onChange={
              (e: React.ChangeEvent<HTMLInputElement> ) => {
                setEditData((prevData: EditData ) => ({...prevData, name: e.target.value}))
              }
            }  
          >
          <span className="bg-white" ><FontAwesomeIcon icon={faUser}/></span>
          </GroupedInput>

          <GroupedInput   
          type="text"
          placeholder="Username"
          name="userName"
            value={editData.userName}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement> ) => { 
              setEditData((prevData: EditData ) => ({...prevData, userName: e.target.value}))
            }
          } 
          >
      <span className="bg-white" ><FontAwesomeIcon icon={faUser}/></span>
          </GroupedInput>

          <TextArea
           type="text"
           placeholder="Bio"
           name="bio"
           value={editData.bio}
           onChange={
            (e: React.ChangeEvent<HTMLInputElement> ) => {
              setEditData((prevData: EditData ) => ({...prevData, bio: e.target.value}))
            }
          } 
           modifier="w-full col-span-2 textarea bg-white"
           cols='10'
          />


          <ImageUpload 
          value={editData.coverImage} 
          onChange={ image => setEditData((prevData: EditData ) => ({...prevData, coverImage: image}))} 
          label={`Edit cover image`}
          
          />

        <ImageUpload 
          value={editData.profileImage} 
              onChange={ image => setEditData((prevData: EditData ) => ({...prevData, profileImage: image}))} 
          label={"Edit profile picture"}
        
        />

        </div>

       
        </motion.div>;
};

export default EditForm;
