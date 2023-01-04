import React from "react";
import tartuOutputMap from "../assets/tartuOutputMap.png";
import estoniaMap from "../assets/EstoniaOutputMap.jpg";
import africanFoodAppImage from "../assets/foodOrder.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import weatherApp from "../assets/weatherApp.png";

const projects = [
  {
    title: "Movie app",
    description:
      "A movie application built with React.js using API from TMBD.The app makes use of FireBase user authentication API endpoints which allows for secure login and logout using a generated token",
    image: africanFoodAppImage,
    id: Math.random(),
    gitHub: "",
    link: "",
  },
  {
    title: "Weather app",
    description:
      "A weather app created with vanilla JavaScript and styled with css",
    image: weatherApp,
    id: Math.random(),
    gitHub: "",
    link: "",
  },
  {
    title: "E-commerce clothing app",
    description:
      "An e-commerce application built with React.js using API from fakestoreapi.com.Search through a variety of categories and add items to your shopping cart",
    image: ecommerce,
    id: Math.random(),
    gitHub: "https://github.com/williamgyamfik/ecommerce_app",
    link: "",
  },
  {
    title: "African food order app",
    description: "A food order app made with React.js and styled with css3",
    image: africanFoodAppImage,
    id: Math.random(),
    gitHub: "https://github.com/williamgyamfik/african-food-order-app",
    link: "https://africanfoodorderapp.netlify.app/",
  },
  {
    title: "Geodata wrangling with R",
    description: "Tartu bus data wrangling with R and visualisation with QGIS",
    image: tartuOutputMap,
    id: Math.random(),
    gitHub: "https://github.com/williamgyamfik/Tartu-Bus-Data-wrangling-with-R",
    link: "",
  },

  {
    title: "Transportation and mobility in Estonia",
    description:
      "This map was created to analyse the bus stop frequency in Estonia.It also shows major counties and their bus stop frequency",
    image: estoniaMap,
    id: Math.random(),
    gitHub: "",
    link: "",
  },
];

const Projects = () => {
  return (
    <div className="container mb-3 pb-5  " id="project">
      <h2 className="text-center pb-5 text-info text-decoration-underline fw-bold fs-1">
        Projects
      </h2>

      <div className="row mt-5">
        {projects.map((project) => {
          return (
            <div
              className="text-light col-sm-12 col-md-6 col-lg-4 mb-4 shadow-lg "
              key={project.id}
            >
              <div
                className="card h-100 m-1 border border-0 bg-info projectBox"
                style={{ height: "60%" }}
              >
                <img
                  className="card-img-top mt-4 mx-auto d-block img-fluid img-thumbnail projectBox"
                  alt="..."
                  src={project.image}
                  style={{ height: "10rem", width: "15rem" }}
                />
                <div
                  className="card-body text-center"
                  // style={{ height: "50%" }}
                >
                  <h5 className="card-title mt-3 fw-bold text-light fs-5 text-decoration-underline ">
                    {project.title}
                  </h5>
                  <p className="text-light">{project.description}</p>
                </div>
                <div className="d-flex justify-content-evenly align-items-center pt-3 pb-3">
                  <a>
                    <button className="btn btn-info text-light  d-flex justify-content-center align-items-center fw-bold">
                      GitHub
                    </button>
                  </a>

                  <a>
                    <button className="btn btn-info text-light d-flex justify-content-center align-items-center fw-bold">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
