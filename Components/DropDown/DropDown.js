import { useState } from "react";
import { BsArrowDownSquareFill} from 'react-icons/bs';
import style from "./DropDown.module.css"

const DropDown = ({length,Price,calendly}) => {
    let [toggle,setToggle]=useState(false)
    return ( 
        <div className={style.Container}>
            <div onClick={()=>setToggle(!toggle)} className={style.Container_titleContainer}>
                <div>
                    <h4 >Price: £{Price}</h4>
                    <h4 >Session: {length}</h4>
                </div>
                <BsArrowDownSquareFill style={{transform:toggle&& "rotate(180deg)",transition:"0.5s"}}
                 fontSize={"2rem"}/>
            </div>
            <span style={{display:toggle?"block":"none"}}>
                {calendly}
            </span>
        </div>
     );
}
 
export default DropDown;