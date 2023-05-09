import { useState, useCallback } from "react";
import useToggle from "./useToggle";
import { useAppContext } from "../context/AppContext";
import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Toast } from "../components"
import { faBarsProgress, faCheckCircle, faThumbsUp, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FormAuthData } from "@/types/interfaces";
import axios from "axios";
import useCurrentUser from "./useCurrentUser";
import useUser from "./useUser";

const initialAuthData: FormAuthData = {

  userName: "",
  name: "",
  email: "",
  password: "",
  rememberMe: false,
  bio: "",
  profileImage: "",
  coverImage: "",


}

const useForm = () => {
  
  const { data: loggedInUser} = useCurrentUser()
  const { mutate: mutatedCurrentUser } = useUser( loggedInUser?.id as string)
  
  const { showPassword, handlePassword, user } = useAppContext()
  const [ formData, setFormData ] = useState<FormAuthData>(initialAuthData);
  const [ isSignup, switchAuth ] = useToggle(true)
    
  const router = useRouter()

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>, image: string) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }))
  }

  const defaultPrevent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  const handleSubmit = useCallback( async () => {
 
       if ( isSignup ) {
    
        try {

          axios.post("/api/signup", {

             headers: {
              "Content-Type": "application/json"
            }
           
    
            }).catch( error => toast.custom(<Toast
                                            text={error.message}
                                            modifier="bg-orange-500 text-white"
                                            icon={faTriangleExclamation}
                                          />)) 
                 
             await signIn("credentials", {
                redirect: true,
                email: formData.email,
                password: formData.password,
                callbackUrl: "/home"
                })
                             
                                              
                toast.custom(<Toast
                 text={`Signing up as ${formData.name}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ...`}
                 modifier="bg-blue-400 text-white"
                 icon={faBarsProgress}
               />)
     
                    
        } catch (error: any) {

          toast.custom((t) => (<Toast
            text={error.message}
            modifier="bg-orange-500 text-white"
            icon={faTriangleExclamation}
            
            />))
          
        }
                                     
    } else {

      try {

        await signIn("credentials", {
          redirect: true,
          email: formData.email,
          password: formData.password,
          callbackUrl: "/home"
         })
         
           setTimeout(() => {

             toast.custom(<Toast
               text={`Welcome back`}
               modifier="bg-blue-500 text-white"
               icon={faThumbsUp}
       />)

           }, 5000)              
           
    
      } catch (error: any) {
        
        toast.custom((t) => (<Toast
          text={error.message}
          modifier="bg-orange-500 text-white"
          icon={faTriangleExclamation}
          />))
        
      }
  
    }
    
   },[ formData, isSignup, router ])

   const handleEdit = useCallback( async () => {

    try {
      
      await axios.patch("/api/edit", formData)

      mutatedCurrentUser()

      toast.custom((t) => (<Toast
        text='Profile edited successfully'
        modifier="bg-green-500 text-white"
        icon={faCheckCircle}
        />))

    } catch (error) {

      toast.custom((t) => (<Toast
        text='Something went wrong'
        modifier="bg-orange-500 text-white"
        icon={faTriangleExclamation}
        />))

      
    }

   },[formData, mutatedCurrentUser])

   const handleDelete = useCallback( async () => {},[])


  return {

    formData,
    handleFormChange,
    handleSubmit,
    isSignup,
    switchAuth,
    showPassword, 
    handlePassword, 
    signIn, user,
    signOut, defaultPrevent, handleEdit
    

  }
}

export default useForm
