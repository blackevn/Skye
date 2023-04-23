
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useAppContext } from "../context/AppContext"
import { ButtonProps } from "@/types/interfaces";



const Button: React.FC<ButtonProps> = (props) => {

  
  const { height } = useAppContext()

 

    const {

           text = "Button", 
           textColor, 
           bgColor, 
           clickEvent, 
           borderColor, 
           icon = faIcons, 
           borderSize = "border-0", 
           paddingX = "px-6",
           paddingY = "py-1",
           children,
           modifier,
           tip,
           isActive,
           disabled
           
          
          } = props

  return (
    <>
    
    <button type="button" disabled={disabled} onClick={clickEvent}
    
    className={`

        flex
        items-center
        justify-center
        gap-1
        rounded-xl  
        btn-sm
        ${ height > 800 ? "md:btn-md" : "btn-sm"}
        
        ${isActive}
        ${modifier}
        ${borderSize} 
        ${borderColor} 
        ${paddingX}
        ${paddingY}
        ${textColor}
        ${bgColor}
      
 
    `}

     data-tip={tip}
    
   ><FontAwesomeIcon icon={icon}/>
          
            {text}
            {children}
        
        </button>

    </>
  )
}


export default Button;
