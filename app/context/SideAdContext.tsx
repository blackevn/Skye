"use client"

import {useContext, createContext } from "react";
import { useToggle } from "../hooks";

type Side = {
    sideToggle: any
    handleSideToggle: any
}

const SideContext = createContext<Side>({

    sideToggle: true,
    handleSideToggle () {}

}) 

export const SideAdContext = ({ children }: any) => {

    const [ sideToggle, handleSideToggle ] = useToggle(true)

  return <SideContext.Provider value={{sideToggle, handleSideToggle}}>

            {children}

        </SideContext.Provider>
};

export const useSideContext = () => useContext(SideContext)
