import { memo } from "react";
import CardTopic from "../CardTopic/CardTopic";

const subjectsList = ({subjects,handleClick}) => {
    return ( 
        <>
        {
            subjects.map(({ icon, subjectTitle, subjectDiscription, price, author, authorImg,subjectList ,Projects}) => {
              return (
                <CardTopic key={subjectTitle} handleClick={()=>handleClick({subjectTitle,subjectDiscription,price,icon,author,authorImg,subjectList,Projects})}
                  icon={icon}
                  subjectTitle={subjectTitle}
                  subjectDiscription={subjectDiscription}
                  price={price}
                  author={author}
                  authorImg={authorImg}
                />
              )
            })}
            </>
     );
}
 
export default memo(subjectsList);