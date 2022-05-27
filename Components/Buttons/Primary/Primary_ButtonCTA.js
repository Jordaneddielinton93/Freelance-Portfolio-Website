import PropTypes from "prop-types";
import style from "./Primary_ButtonCTA.module.css";

const Primary_ButtonCTA = ({ Label }) => {
  return (
    <button data-testid="PrimaryButton" className={style.PrimaryButton}>
      {Label}
    </button>
  );
};

Primary_ButtonCTA.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Primary_ButtonCTA;
