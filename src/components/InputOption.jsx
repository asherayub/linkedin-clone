import React from "react";
import "./styles/inputOption.css";
function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <Icon className="inputOption__icon" styles={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
