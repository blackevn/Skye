"use client"

import {useContext, createContext} from "react";
import {useToggle, useWidth, useHeight} from "../hooks";

interface ContextData  {

  toggle: any
  handleToggle: any
  width: any
  user: boolean 
  adSectionToggle: any
  handleAdSectionToggle: any
  height: number
  showPassword: any
  handlePassword: any
}


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

export const AppContext = (props: any) => {

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

