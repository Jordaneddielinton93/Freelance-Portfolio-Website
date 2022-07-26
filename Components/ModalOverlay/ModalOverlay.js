import styles from "./ModalOverlay.module.css"
const ModalOverlay = ({children,isOpen,closeModal}) => {
    return ( 
        <div onClick={closeModal}
        className={styles.Container} style={{display:isOpen?"flex":"none"}}>
            {children}
        </div>
     );
}
 
export default ModalOverlay;