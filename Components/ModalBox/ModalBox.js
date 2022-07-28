import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA"
import styles from "./ModalBox.module.css"
import { BsFillXCircleFill } from 'react-icons/bs';

import { InlineWidget } from "react-calendly";
import DropDown from "../DropDown/DropDown";
const ModalBox = ({modalData,closeModal}) => {
    console.log(modalData)

    if(!modalData){
        return <></>
    }

    let {subjectTitle,subjectDiscription,price,icon,subjectList,Projects}=modalData
    
    return ( 
        <div className={styles.Container}> 
            {/* <span className={styles.Container_Cross}> */}
                <BsFillXCircleFill 
                 className={styles.Container_Cross} onClick={closeModal}/>
            {/* </span> */}
            <DropDown
             length={"4 hours"}
             Price={"35"}
             calendly={<InlineWidget url="https://calendly.com/jordan-eddie-linton/tutoring-4-hours" />}/>
            <DropDown
             length={"3 hours"}
             Price={"30"}
             calendly={<InlineWidget url="https://calendly.com/jordan-eddie-linton/tutoring-3-hours" />}/>
            <DropDown
             length={"2 hours"}
             Price={"25"}
             calendly={<InlineWidget url="https://calendly.com/jordan-eddie-linton/tutoring" />}/>
             <DropDown
             length={"1 hours"}
             Price={"12.50"}
             calendly={<InlineWidget url="https://calendly.com/jordan-eddie-linton/tutoring-1-hour" />}/>
            <div className={styles.Container_Block} style={{textAlign:"center"}}>
                <h1>{subjectTitle} {icon}</h1>
               
            </div>
            <div className={styles.Container_Block}>
                <h2>Subject discription</h2>
                <p>{subjectDiscription}</p>
            </div>
            <div className={styles.Container_Block}>
                <h2>Things you will learn</h2>
                <ul>
                    {subjectList.map((li)=>{
                        return <li>{li}</li>
                    })}
                </ul>
            </div>
            <div className={styles.Container_Block}>
                <h2>Project</h2>
                <p>{Projects}</p>
            </div>
           
            
        </div>
     );
}
 
export default ModalBox;
