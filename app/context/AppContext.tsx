"use client"

import { useContext, createContext } from "react";
import { useToggle, useWidth, useHeight } from "../hooks";
import { ContextData, IProps } from "@/types/interfaces";

const Context = createContext<ContextData>({

  toggle: false,
  handleToggle: () => {},
  width: () => {},
  user: true,
  adSectionToggle: true,
  handleAdSectionToggle: () => {},
  height: 0,
  showPassword: false,
  handlePassword: () => {}
  
 })

export const AppContext = (props: IProps) => {

  const [ toggle, handleToggle ] = useToggle(false)
  const [ adSectionToggle, handleAdSectionToggle ] = useToggle()
  const [ showPassword, handlePassword ] = useToggle(false)
  const [ width ] = useWidth()
  const [ height ] = useHeight()
  const { children } = props
  const user: boolean = false

  return <Context.Provider  value={{ user, 
                                     width, 
                                     toggle, 
                                     handleToggle, 
                                     adSectionToggle, 
                                     handleAdSectionToggle, 
                                     height,
                                     showPassword, handlePassword }}>

            {children}

         </Context.Provider>  
};

export const useAppContext = () => useContext(Context)

