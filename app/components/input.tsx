import { useAppContext } from "../context/AppContext"

const Input = (props: any) => {

  const { height } = useAppContext()

    const {type, 
           name, 
           value, 
           id, 
           onChange, 
           placeholder = "Input", 
           bgColor, 
           outline = "outline-none", 
           textColor =  "text-gray-600", 
           textTrans, 
           span, 
           modifier, 
           ref, 
           disabled, 
           hidden, 
           icon} = props

  return (

    <>

    <input 

    disabled={disabled}

      ref={ref}
      className={`
       rounded-xl
       p-1.5
       px-2
       ${bgColor}
       ${outline} 
       ${textColor}
       ${textTrans}
       ${span}
       ${modifier}
       bg-white
       w-full
       focus:bg-white
       input-sm
       ${ height > 800 ? "md:input-md" : "input-sm"}

       `}

    type={type}
    name={name}
    value={value}
    id={id}
    onChange={onChange}
    placeholder={placeholder}
    hidden={hidden}
    />


    </>

  )
}


export default Input;
