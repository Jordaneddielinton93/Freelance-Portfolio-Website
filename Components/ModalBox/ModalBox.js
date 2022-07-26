import styles from "./ModalBox.module.css"

const ModalBox = ({modalData}) => {
    console.log(modalData)

    if(!modalData){
        return <></>
    }

    let {subjectTitle,subjectDiscription,price,icon,author,authorImg}=modalData
    return ( 
        <div className={styles.Container}>
            <h2>{subjectTitle} {icon}</h2>
            <p>{subjectDiscription}</p>
        </div>
     );
}
 
export default ModalBox;
