import React from "react";

import "InfoBar.css";

const InfoBar = () => {
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>room</h3>
    </div>

    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close" />
      </a>
    </div>
  </div>;
};

export default InfoBar;
