import { EditData } from "@/types/interfaces";
import { faCheckCircle, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Toast } from "../components";
import { toast } from "react-hot-toast";
import useUser from "./useUser";
import { useAppContext } from "../context/AppContext";

const initialEditData: EditData = {

    userName: '',
    name: '',
    bio: '' ,
    coverImage: '',
    profileImage: ''
  
  }
  
  const useEditProfile = () => {
    
    const { user } = useAppContext()
    const [ editData, setEditData ] = useState<EditData>(initialEditData);
    const { mutate: mutatedCurrentUser } = useUser( user?.id as string)

  
    const handleEdit = async () => {

      try {
        
      await axios.patch("/api/edit", editData )
        .catch( error => toast.custom(<Toast
          text={error.message}
          modifier="bg-orange-500 text-white"
          icon={faTriangleExclamation}
          />))
  
            mutatedCurrentUser()
  
            toast.custom((t) => (<Toast
              text='Profile edited successfully'
              modifier="bg-green-500 text-white"
              icon={faCheckCircle}
              />))
  
          } catch (error: any) {
  
            toast.custom((t) => (<Toast
              text={error.message}
              modifier="bg-orange-500 text-white"
              icon={faTriangleExclamation}
          />))
        
  } 
  
     }

     useEffect(() => {
      
      setEditData({
      userName: user?.userName,
      name: user?.name,
      bio: user?.bio,
      coverImage: user?.coverImage,
      profileImage: user?.profileImage
      })

  }, []);

    return {

          editData, 
          setEditData, 
          handleEdit

    }
  };
  
  export default useEditProfile;
  