"use client"

import { useContext, createContext, useEffect } from "react";
import { useToggle, useWidth, useHeight, useCurrentUser } from "../hooks";
import { ContextData, IProps } from "@/types/interfaces";
import { useRouter } from "next/router";

const Context = createContext<ContextData>({

  width: 0,
  height: 0,
  toggle: false,
   
 })

export const AppContext = ({children}: IProps) => {

  const { data: session } = useCurrentUser()
  const [ toggle, handleToggle ] = useToggle(false)
  const [ adSectionToggle, handleAdSectionToggle ] = useToggle()
  const [ showPassword, handlePassword ] = useToggle(false)
  const [ editProfileToggle, handleEditProfileToggle ] = useToggle(false)
  const [ width ] = useWidth()
  const [ height ] = useHeight()
  const user = session

 
  return <Context.Provider  value={{ user, 
                                     width, 
                                     toggle, 
                                     handleToggle, 
                                     adSectionToggle, 
                                     handleAdSectionToggle, 
                                     height,
                                     showPassword, handlePassword,
                                     editProfileToggle, handleEditProfileToggle

                                     }}>

            {children}

         </Context.Provider>  
};

export const useAppContext = () => useContext(Context)

