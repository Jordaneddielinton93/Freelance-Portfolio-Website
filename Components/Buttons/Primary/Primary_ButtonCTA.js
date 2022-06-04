import PropTypes from "prop-types";
import style from "./Primary_ButtonCTA.module.css";
import Link from "next/link";

const Primary_ButtonCTA = ({ Label }) => {
  return (
    <Link href="/Contact">
      <button data-testid="PrimaryButton" className={style.PrimaryButton}>
        {Label}
      </button>
    </Link>
  );
};

Primary_ButtonCTA.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Primary_ButtonCTA;
