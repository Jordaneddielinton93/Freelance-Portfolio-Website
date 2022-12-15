import Image from "next/image";
import Link from "next/link";
import styled from "./Testimonial.module.css";
const TestimonialImageComp = ({ src, top, right, delay }) => {
  return (
    <Link href={"/Tutor"}>
      <span
        className={styled.Container}
        style={{ right: right, top: top, zIndex: 10, animationDelay: delay }}
      >
        <Image height="94px" width="223px" alt="Initials" src={src} />
      </span>
    </Link>
  );
};

export default TestimonialImageComp;
