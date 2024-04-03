import React from "react";
import hpage from '../../assets/img/hpage.jpg'
import "./Home.css";

export const Home = () => {
  return (
    <div className="pagebox">
      <div className="quotes">
        <div className="name">
          <h1> Hostel jindabad </h1>
        </div>

        <div className="quote">
          <h2>Hostel better than Hotel !!!! </h2>
        </div>

        <div className="button">
          <button>
            {" "}
            <h3> Book Now </h3>{" "}
          </button>
        </div>
      </div>

      <div>
        <img
          src={hpage}
          alt="hpage"
          height={500}
          width={500}
          className="image"
        />
      </div>
    </div>
  );
};
