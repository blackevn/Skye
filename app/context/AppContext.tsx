"use client"

import { useContext, createContext, useEffect, useMemo, useCallback } from "react";
import { useToggle, useWidth, useHeight, useCurrentUser, usePosts, usePost, useUsers } from "../hooks";
import { ContextData, IProps, Post } from "@/types/interfaces";
import useDarkMode from "../hooks/useDarkMode";
import { useRouter } from "next/router";


const Context = createContext<ContextData>({

  width: 0,
  height: 0,
  
   
 })

export const AppContext = ({children}: IProps) => {


  const { data: user } = useCurrentUser()
  const { data: users } = useUsers()
  
  const { data: posts = [] } = usePosts( users?.id as string)

  const [ toggle, handleToggle ] = useToggle(false)
  const [ adSectionToggle, handleAdSectionToggle ] = useToggle()
  const [ showPassword, handlePassword ] = useToggle(false)
  const [ editProfileToggle, handleEditProfileToggle ] = useToggle(false)
  const [ addPostToggle, handleAddPostToggle ] = useToggle(false)
  const [ darkMode, setDarkMode ] = useDarkMode()
  const [ width ] = useWidth()
  const [ height ] = useHeight()

  const toggleDarkMode: () => void = () => {
    setDarkMode((prevState: boolean) => !prevState)
  }


  return <Context.Provider  value={{ user, width, toggle, handleToggle, 
                                     adSectionToggle, handleAdSectionToggle, 
                                     height, posts, showPassword, handlePassword,
                                     editProfileToggle, handleEditProfileToggle,
                                     addPostToggle, handleAddPostToggle, darkMode, 
                                     toggleDarkMode
                            

                                     }}>

            {children}

         </Context.Provider>  
};

export const useAppContext = () => useContext(Context)

