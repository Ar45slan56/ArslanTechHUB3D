import React from "react";

const Button = ({ text, className, id }) => {
  return (
    <a href="#portfolio" id={id} className={`cta-wrapper group ${className}`}>
      <div className="cta-button">
        <div className="bg-circle"></div>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
