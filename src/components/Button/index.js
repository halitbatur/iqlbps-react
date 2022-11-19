import React from "react";
import "./style.css";

function Button({ link, color, text, onClick }) {
  return (
    <button
      className="main-button"
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
    >
      <a href={link} target="_blank">
        {text}
      </a>
    </button>
  );
}

export default Button;
