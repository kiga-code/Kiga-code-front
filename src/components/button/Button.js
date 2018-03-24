import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/Button.scss";

function Button({ styleClass, children, onClick }) {
  return (
    <button onClick={onClick} className={styleClass}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  styleClass: "button"
};

Button.propTypes = {
  styleClass: PropTypes.string.isRequired
};
export default Button;
