
import { useState } from "react";
import useToggle from "./useToggle";
import { useAppContext } from "../context/AppContext";
import { useGoogleLogin } from "@react-oauth/google"
import { useSession, signIn, signOut } from "next-auth/react"
import axios from "axios";

export type FormAuthData = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
  rememberMe: boolean;
  
}

const initialAuthData: FormAuthData = {
  firstName: "",
  lastName: "",
  userName: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ( isSignup ) {

      
    } else {

      console.log("Greaat stuff tooo");

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
    session, signIn, signOut 

  }
}

export default useForm
