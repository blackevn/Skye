import { useState, useCallback } from "react";
import useToggle from "./useToggle";
import { useAppContext } from "../context/AppContext";
import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Toast } from "../components"
import { faBarsProgress, faThumbsUp, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FormAuthData } from "@/types/interfaces";
import useCurrentUser from "./useCurrentUser";

const initialAuthData: FormAuthData = {

  userName: "",
  name: "",
  email: "",
  password: "",
  rememberMe: false

}

const useForm = () => {
  
  const { showPassword, handlePassword, user } = useAppContext()
  const [ formData, setFormData ] = useState<FormAuthData>(initialAuthData);
  const [ isSignup, switchAuth ] = useToggle(true)
  
  const router = useRouter()

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

          fetch("/api/signup", {

            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
    
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
         
                         
          toast.custom(<Toast
            text={`Welcome ${formData.name}`}
            modifier="bg-blue-500 text-white"
            icon={faThumbsUp}
    />)
           
    
      } catch (error: any) {
        
        toast.custom((t) => (<Toast
          text={error.message}
          modifier="bg-orange-500 text-white"
          icon={faTriangleExclamation}
          />))
        
      }
  
    }
    
   },[ formData, isSignup, router ])

  return {

    formData,
    handleFormChange,
    handleSubmit,
    isSignup,
    switchAuth,
    showPassword, 
    handlePassword, 
    signIn, user,
    signOut, defaultPrevent

  }
}

export default useForm
