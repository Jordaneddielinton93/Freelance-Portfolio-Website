import style from "./Circle.module.css";

const Circle = ({ top, left, right }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        right: right,
        zIndex: 1,
      }}
    >
      <div className={style.Circle}></div>
    </div>
  );
};

export default Circle;
