"use client"

import { useContext, createContext, useEffect } from "react";
import { useToggle, useWidth, useHeight, useCurrentUser } from "../hooks";
import { ContextData, IProps } from "@/types/interfaces";

const Context = createContext<ContextData>({

  width: 0,
  user: true,
  height: 0,
  toggle: false,
   
 })

export const AppContext = ({children}: IProps) => {

  const { data: session } = useCurrentUser()
  const [ toggle, handleToggle ] = useToggle(false)
  const [ adSectionToggle, handleAdSectionToggle ] = useToggle()
  const [ showPassword, handlePassword ] = useToggle(false)
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
                                     }}>

            {children}

         </Context.Provider>  
};

export const useAppContext = () => useContext(Context)

