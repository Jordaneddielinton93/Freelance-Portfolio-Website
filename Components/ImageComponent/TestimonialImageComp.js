import Image from "next/image";

const TestimonialImageComp = ({ src, top, right, Aos }) => {
  return (
    <span style={{ position: "absolute", right: right, top: top, zIndex: 1, cursor: "pointer" }} data-aos={"fade-right"} >
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