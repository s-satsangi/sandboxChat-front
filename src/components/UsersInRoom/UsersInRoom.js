import React from "react";
import "./UsersInRoom.css";
import onlineIcon from "../../icons/onlineIcon.png";

const UsersInRoom = ({ users }) => (
  <div className="usersContainer">
    <div>
      <h1>
        Welcome to yacapp --> YetAnotherChatAPP
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created mainly so I have a sandbox to learn <br />
        Node, Socket.IO, CSS, & Redux
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!
        <span role="img" aria-label="emoji">
          ☝️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1> People Online Right Now:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <img src={onlineIcon} />
                {name}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);
export default UsersInRoom;
