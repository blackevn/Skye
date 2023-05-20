import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";
import { useAppContext } from "@/app/context/AppContext";
import { motion } from "framer-motion"; 
import { useVariants } from "@/app/hooks";

type ModalProps = {

    children: React.ReactNode;

}

const Modal: React.FC<ModalProps> = ({children}) => {

const { modalVariants, modalChildrenVariants } = useVariants()

    const { handleAddPostToggle } = useAppContext()

return <>
        <motion.div 
            onClick={handleAddPostToggle}
            variants={modalVariants}
            animate="show"
            initial="hidden"
            className="grid place-items-center h-screen w-screen absolute z-[999]"
            >

            <motion.div 
                onClick={(e: React.MouseEvent ) => {
                e.stopPropagation(); 
              }}
             drag
             dragConstraints={{
             top: 0,
             left: 0,
             right: 0,
             bottom: 0,
               }}
            variants={modalChildrenVariants}
            className="relative min-h-[200px] min-w-[200px] bg-white drop-shadow-xl rounded-3xl z-[9999]">

                <Button  
                    modifier="absolute top-0 right-0" 
                    text="" 
                    clickEvent={ handleAddPostToggle }
                    icon={faXmark}
                    />

                    {children}

            </motion.div>
            
            </motion.div>
    
        </>
};

export default Modal;
