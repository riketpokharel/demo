import React, { useState } from "react";
import "./Room.css";

export const Rooms = () => {
  const [infoVisible, setInfoVisible] = useState(false);

  const toggleInfoVisibility = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <div className="r_section">
      <div className="room">
        <h1> ROOM </h1>
      </div>

      <div className="room_section">
        <div
          className="room1"
          onMouseEnter={toggleInfoVisibility}
          onMouseLeave={toggleInfoVisibility}
        >
          <h2> 1 SEATER </h2>

          {infoVisible && (
            <div className="room-info">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente, quasi autem quaerat quidem nostrum facilis enim? Harum
                repellendus possimus, animi, nesciunt, quidem sunt at amet
                veritatis expedita labore ratione explicabo.
              </p>
            </div>
          )}
        </div>

        <div
          className="room2"
          onMouseEnter={toggleInfoVisibility}
          onMouseLeave={toggleInfoVisibility}
        >
          <h2> 2 SEATER </h2>

          {infoVisible && (
            <div className="room-info">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente, quasi autem quaerat quidem nostrum facilis enim? Harum
                repellendus possimus, animi, nesciunt, quidem sunt at amet
                veritatis expedita labore ratione explicabo.
              </p>
            </div>
          )}
        </div>

        <div
          className="room3"
          onMouseEnter={toggleInfoVisibility}
          onMouseLeave={toggleInfoVisibility}
        >
          <h2> 3 SEATER </h2>

          {infoVisible && (
            <div className="room-info">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente, quasi autem quaerat quidem nostrum facilis enim? Harum
                repellendus possimus, animi, nesciunt, quidem sunt at amet
                veritatis expedita labore ratione explicabo.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
