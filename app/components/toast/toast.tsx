import { ToastProps } from "@/types/interfaces";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faIcons } from "@fortawesome/free-solid-svg-icons";
import ToastButton from "./toastButton";



const Toast: React.FC<ToastProps> = ({ modifier, children, text, icon = faIcons, clickEvent, mode = false}) => {

  return <>
                <motion.div transition={{ type: "spring", stiffness: 100 }} 
                            className={` ${modifier} toastCustom `} >

                  <div className="flex gap-4 items-center">
                  <FontAwesomeIcon icon={icon}/>
                  {text}
                  </div>

                { mode && <ToastButton clickEvent={clickEvent} icon={faClose}/> }
                
                </motion.div>
         </>
};

export default Toast;
