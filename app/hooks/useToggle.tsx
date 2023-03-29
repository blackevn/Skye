"use client";

import { useState } from "react";

const useToggle = ( initialValue:boolean = false ) => {

  const [ toggle, setToggle ] = useState(initialValue)

  const handleToggle = () => {

      setToggle(prev => !prev)

  }

  return [ toggle, handleToggle ]

}

export default useToggle;
