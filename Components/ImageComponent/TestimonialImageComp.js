import Image from "next/image";
import styled from "./Testimonial.module.css"
const TestimonialImageComp = ({ src, top, right,delay}) => {
  return (
    <span className={styled.Container} style={{  right: right, top: top, zIndex: 5, animationDelay:delay }} >
      <Image
        height="94px"
        width="223px"
        alt="Initials"
        src={src}
      />

    </span>
  );
}

export default TestimonialImageComp;