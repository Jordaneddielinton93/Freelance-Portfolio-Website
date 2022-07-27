import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA"
import styles from "./ModalBox.module.css"
import { BsFillXCircleFill } from 'react-icons/bs';

const ModalBox = ({modalData,closeModal}) => {
    console.log(modalData)

    if(!modalData){
        return <></>
    }

    let {subjectTitle,subjectDiscription,price,icon,subjectList,Projects}=modalData
    
    return ( 
        <div className={styles.Container}>
            {/* <span className={styles.Container_Cross}> */}
                <BsFillXCircleFill className={styles.Container_Cross} onClick={closeModal}/>
            {/* </span> */}
            <div className={styles.Container_Block} style={{textAlign:"center"}}>
            
                <Primary_ButtonCTA Label={`Purchase: £${price}:00`}/>
            </div>
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
            <div className={styles.Container_Block}>
                <h2>Price</h2>
                <p> 2 hour session: £{price}.00</p>
            </div>
            
        </div>
     );
}
 
export default ModalBox;
