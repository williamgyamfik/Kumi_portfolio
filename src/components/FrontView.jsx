import React from "react";
import FrontLogo from "../assets/portfolioPic.png";

const FrontView = () => {
  return (
    <>
      <div className="conatiner px-5 py-5 mt-5 " id="frontview">
        <div className="row d-flex justify-content-center">
          <div className="w-100 d-flex justify-content-center align-items-center flex-column-reverse flex-md-row ">
            <div className=" d-flex justify-content-center align-items-center flex-column">
              <p className="text-muted pt-3 fs-1">Hi my name is,</p>
              <h1 className="text-light fw-bold text-decoration-underline">
                William Gyamfi Kumi
              </h1>
              <h1 className="text-info fw-bold fs-5">
                I'm a Frontend Developer
              </h1>
              <p className="text-light">
                I’m a Frontend Developer with a passion for designing and
                building user friendly websites and application
              </p>
            </div>

            <div className=" text-center ">
              <img
                className="image_1 image-fluid rounded-circle"
                height={"300rem"}
                width={"300rem"}
                src={FrontLogo}
                alt=""
                // style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontView;
