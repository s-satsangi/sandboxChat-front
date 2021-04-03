import React from "react";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

import "./InfoBar.css";

const InfoBar = (props) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <div>
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      </div>
      <h3>{props.room}</h3>
    </div>

    <div className="rightInnerContainer">
      <div className="leftInnerContainer">
        <span className="logo">YetAnotherChatAPP </span>
      </div>
    </div>
    <a href="/">
      <img src={closeIcon} alt="close" />
    </a>
  </div>
);

export default InfoBar;
