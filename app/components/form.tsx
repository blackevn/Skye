
const Form = (props: any) => {

  const {label = "Form", children, formPadding = "p-8", action, method, bgColor, modifier, onSubmit} = props

  return (
          <>
  
          <form className={`
          
          flex
          flex-col
          ${bgColor}
          ${formPadding}
          ${modifier}
          rounded-2xl
          gap-3
                  
          `}
          
          action={action}
          method={method}
          onSubmit={onSubmit}
          >
            <h2 className={`
                text-4xl 
                m-4 
                font-bold
                text-white
                dark:text-gray-600
               
                `}  >{label}</h2>

            {children}

          </form>

          </>
          )
};



export default Form;
