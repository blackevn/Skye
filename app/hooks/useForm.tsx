
import { useState } from "react";
import useToggle from "./useToggle";
import { useAppContext } from "../context/AppContext";
import { useSession, signIn, signOut } from "next-auth/react"


export type FormAuthData = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  rememberMe: boolean;
  
}

const initialAuthData: FormAuthData = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
  rememberMe: false,
}



const useForm = () => {

  
  const {  showPassword, handlePassword } = useAppContext()
  const [formData, setFormData] = useState<FormAuthData>(initialAuthData);
  const [ isSignup, switchAuth ] = useToggle(true)
  const { data: session } = useSession()

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

  const handleSubmit = async ( values: any) => {
  

    if ( isSignup ) {

      fetch("http://localhost:3000/api/auth/signup", {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)

      })
      
    } else {

     await signIn("credentials", {

      redirect: true,
      email: values.email,
      password: values.password,
      callbackUrl: "/home"

     })

    }
  }

  return {

    formData,
    handleFormChange,
    handleSubmit,
    isSignup,
    switchAuth,
    showPassword, 
    handlePassword, 
    session, signIn, signOut,
    defaultPrevent


  }
}

export default useForm
