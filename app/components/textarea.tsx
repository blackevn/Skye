
const TextArea = (props: any) => {
 
    const {
        
            value ,
            name,
            id,
            cols,
            rows,
            onChange,
            placeholder = "Textarea",
            modifier
            
        } = props

    return (
  
    <>
    <textarea className={`
      
    ${modifier}
    textarea bg-transparent outline-0

    `}

        name={name}
        value={value}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        cols={cols} 
        rows={rows} >

    </textarea>
    </>
  
    )
};


export default TextArea;
