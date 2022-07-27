import styles from "./ModalOverlay.module.css"
const ModalOverlay = ({children,isOpen}) => {
    return ( 
        <div 
        className={styles.Container} style={{display:isOpen?"flex":"none"}}>
            {children}
        </div>
     );
}
 
export default ModalOverlay;