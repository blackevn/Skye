import { ButtonProps } from "@/types/interfaces";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";


const ToastButton:  React.FC<ButtonProps> = ({icon = faIcons, clickEvent }) => {
  return <>
            <button
             className="text-xl p-0 m-0 text-white rounded-full grid place-items-center" 
             onClick={clickEvent}
            ><FontAwesomeIcon icon={icon}/></button>
        

        </>
};

export default ToastButton;
