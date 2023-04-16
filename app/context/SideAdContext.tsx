"use client"

import {useContext, createContext } from "react";
import { useToggle } from "../hooks";
import { IProps, Side } from "@/types/interfaces";

const SideContext = createContext<Side>({

    sideToggle: true,
    handleSideToggle () {}

}) 

export const SideAdContext = ({ children }: IProps) => {

    const [ sideToggle, handleSideToggle ] = useToggle(true)

  return <SideContext.Provider value={{sideToggle, handleSideToggle}}>

            {children}

        </SideContext.Provider>
};

export const useSideContext = () => useContext(SideContext)
