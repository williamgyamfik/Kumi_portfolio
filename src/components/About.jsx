import React from "react";
import html from "../assets/techIcons/html.png";
import bootstrap from "../assets/techIcons/bootstrap.jpg";
import css from "../assets/techIcons/css.png";
import firebase from "../assets/techIcons/firebase.png";
import javascript from "../assets/techIcons/javascript.png";
import next from "../assets/techIcons/next.png";
import react from "../assets/techIcons/react.png";

const About = () => {
  return (
    <>
      <div className=" mt-5 px-8 py-8 w-100">
        <div className="d-flex justify-content-center container ">
          <div className="w-25 mt-5 d-flex flex-column align-items-center  w-75">
            <h1 className="text-info text-decoration-underline text-center fw-bold">
              About
            </h1>
            <p className=" text-light lh-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              modi quibusdam, ab ipsam, nobis tempore consequuntur ea
              praesentium porro vero rerum assumenda repudiandae nihil magni
              doloremque esse ut voluptatem dolorem!
            </p>

            <div className="d-flex justify-content-center">
              <button className="btn btn-info">More...</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 px-8 py-8 mt-5 mb-5 px-5 py-5">
        <div className="d-flex justify-content-center flex-column ">
          <h1 className="text-info text-decoration-underline text-center fw-bold">
            Tech Stack
          </h1>
          <div className="container-fluid  text-center text-light mt-5 ">
            <div className="d-flex justify-content-center ">
              <div className="row col-sm-12 col-md-10 col-lg-8">
                <div className="techbox col px-3 py-3">
                  <img className="techIcons" src={html} alt="" />
                  <p className="pt-2">HTML5</p>
                </div>
                <div className="techbox col px-3 py-3">
                  <img className="techIcons" src={css} alt="" />
                  <p className="pt-2">CSS3</p>
                </div>
                <div className="techbox col px-3 py-3">
                  <img className="techIcons" src={javascript} alt="" />
                  <p className="pt-2">JAVASCRIPT</p>
                </div>
                <div className="techbox col px-3 py-3">
                  <img className="techIcons" src={react} alt="" />
                  <p className="pt-2">REACT.js</p>
                </div>
                <div className="techbox col px-3 py-3">
                  <img className="techIcons" src={next} alt="" />
                  <p className="pt-2"> NEXT.js</p>
                </div>
                <div className="techbox col px-3 py-3">
                  <img className="techIcons" src={bootstrap} alt="" />
                  <p className="pt-2">BOOTSTRAP</p>
                </div>
                <div className="techbox col px-3 py-3">
                  <img className="techIcons" src={firebase} alt="" />
                  <p className="pt-2">FIREBASE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
