import React from "react";
import FrontLogo from "../assets/portfolioPic.png";

const FrontView = () => {
  return (
    <>
      <div className="conatiner px-5 py-5 mt-5  " id="frontview">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className=" px-5 py-5">
              <p className="text-muted pt-3 fs-1">Hi my name is,</p>
              <h1 className="text-light fw-bold lh-2 text-decoration-underline">
                William Gyamfi Kumi
              </h1>
              <h1 className="text-info fw-bold">I'm a Frontend Developer</h1>
              <p className="text-light">
                I’m a Frontend Developer with a passion for designing and
                building user friendly websites and application
              </p>
            </div>

            <div
              className="d-flex justify-content-center  px-5 py-5"
              style={{ width: "20%" }}
            >
              <img className="image_1" src={FrontLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontView;
