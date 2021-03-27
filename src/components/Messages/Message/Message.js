import React from "react";

import "./Message.css";

const Message = (props) => {
  let isSentByCurrentUser = false;

  const trimmedName = props.name.trim().toLowerCase();

  if (props.message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{props.message.text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{props.message.text}</p>
      </div>
      <p className="sentText pr-10">{props.message.user}</p>
    </div>
  );
};

export default Message;
