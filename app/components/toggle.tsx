import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toggle = (props: any ) => {

    const {toggleEvent, on = faIcons, off = faIcons, modifier, modifier1, modifier2, checked = false, placeholder} = props
           
return (

        <>
            
            <label className={`swap swap-rotate ${modifier} `}>
            
            <input placeholder={placeholder} type="checkbox" checked={checked} onChange={toggleEvent}/>

            <div className={`swap-on fill-current text-2xl ${modifier1} grid place-items-center`}><FontAwesomeIcon icon={ on }/></div>
            <div className={`swap-off fill-current text-2xl ${modifier2} grid place-items-center`}><FontAwesomeIcon icon={ off }/></div>
            
            </label>
            
        </>

    )
}


export default Toggle
