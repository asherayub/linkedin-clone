import React from "react";
import "./styles/headerOption.css";
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {avatar && <img className="headerOption__me" src={avatar} alt="" />}
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
