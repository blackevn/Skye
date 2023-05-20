"use client"

import { useContext, createContext, useEffect, useMemo } from "react";
import { useToggle, useWidth, useHeight, useCurrentUser, usePosts, usePost } from "../hooks";
import { ContextData, IProps, Post } from "@/types/interfaces";


const Context = createContext<ContextData>({

  width: 0,
  height: 0,
  
   
 })

export const AppContext = ({children}: IProps) => {

  const { data: user } = useCurrentUser()
  const { data: posts} = usePosts()
  const { data: post} = usePost(user?.id as string)
  const [ toggle, handleToggle ] = useToggle(false)
  const [ adSectionToggle, handleAdSectionToggle ] = useToggle()
  const [ showPassword, handlePassword ] = useToggle(false)
  const [ editProfileToggle, handleEditProfileToggle ] = useToggle(false)
  const [ addPostToggle, handleAddPostToggle ] = useToggle(false)
   const [ width ] = useWidth()
  const [ height ] = useHeight()


  return <Context.Provider  value={{ user, 
                                     width, 
                                     toggle, 
                                     handleToggle, 
                                     adSectionToggle, 
                                     handleAdSectionToggle, 
                                     height, posts, post,
                                     showPassword, handlePassword,
                                     editProfileToggle, handleEditProfileToggle,
                                     addPostToggle, handleAddPostToggle,
                            

                                     }}>

            {children}

         </Context.Provider>  
};

export const useAppContext = () => useContext(Context)

