import { FormAuthData, FunctionHandler } from "@/types/interfaces";
import { useAppContext } from "@/app/context/AppContext";
import Button from "../button";
import { faUser, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import GroupedInput from "../groupedInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextArea from "../textarea";
import ImageUpload from "./imageUpload";

interface EditPanel {
  
  formData: FormAuthData
  handleEdit: FunctionHandler
  handleFormChange?: any

}

const EditForm: React.FC<EditPanel> = ({  formData, handleEdit, handleFormChange }) => {

  const { handleEditProfileToggle } = useAppContext()

  console.log(formData);
  

  return <div className="text-gray-600 fixed top-0 right-0 bottom-0 w-full md:w-[70%] lg:w-[50%] h-full backdrop-blur-2xl z-[999] p-4 rounded-l-2xl space-y-4">

          <Button modifier="text-2xl p-0 m-0" clickEvent={handleEditProfileToggle} text="" icon={faXmarkCircle} />

          <h1 className="text-3xl font-bold">Edit Profile</h1>

          <div className="grid grid-cols-2 gap-2">

         
          <GroupedInput   
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          >
          <span className="bg-white" ><FontAwesomeIcon icon={faUser}/></span>
          </GroupedInput>

          <GroupedInput   
          type="text"
          placeholder="Name"
          name="name"
          value={formData.userName}
          onChange={handleFormChange}
          >
          <span className="bg-white" ><FontAwesomeIcon icon={faUser}/></span>
          </GroupedInput>

          <TextArea
           type="text"
           placeholder="Bio"
           name="bio"
           value={formData.bio}
           onChange={handleFormChange}
           modifier="w-full col-span-2 textarea bg-white"
           cols='10'
          />

          <input 
          type="file" className="file-input file-input-bordered file-input-primary w-full" 
          placeholder="Profile Image"
          name="profileImage"
          value={formData.profileImage}
          onChange={image => handleFormChange(image)}
          />

          <input 
          type="file" className="file-input file-input-bordered file-input-primary w-full" 
          placeholder="Cover Image"
          name="coverImage"
          value={formData.coverImage}
          onChange={image => handleFormChange(image)}
          />

          <ImageUpload onChange={function (base64: string): void {
          throw new Error("Function not implemented.");
          } } label={""}/>

          </div>

       
          </div>;
};

export default EditForm;
