import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../context/AppContext"

const GroupedInput = (props: any) => {

    const { height } = useAppContext()

    const { type, 
            name, 
            value, 
            id, 
            onChange, 
            placeholder = "Input", 
            textColor = "text-gray-400", 
            modifier,
            label,
            icon = faIcons,
            children,
            disabled, ref  } = props

  return (

    <>
        <div className="form-control ">
        <label className="label m-0 p-0">
            <span className="label-text">{label}</span>
        </label>
        <label className="input-group text-gray-600 dark:text-base-200 rounded-2xl">

            <input 

                
            disabled={disabled}

            ref={ref}

            className={`
                outline-none
                rounded-lg
                py-4
                px-2
                w-full
                ${modifier}
                bg-white
                input-sm
     
                ${ height > 800 ? "md:input-md" : "input-sm"}

                `}

                type={type}
                name={name}
                value={value}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                
                />


               {children}

            

        </label>
        </div>

   

    </>

  )
}


export default GroupedInput;
