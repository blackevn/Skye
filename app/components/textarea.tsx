
const TextArea = (props: any) => {
 
    const {
        
            value,
            name,
            id,
            cols,
            rows,
            onChange,
            placeholder,
            modifier
            
        } = props

    return (
  
    <>
    <textarea className={`
   
    text-gray-400
    ${modifier}
    textarea bg-white outline-none

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
