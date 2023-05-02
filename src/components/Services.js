import { getAllByPlaceholderText } from "@testing-library/react";
import React from "react";
import ArrowIcon from "../assets/arrow-right.svg";

function Services() {
  return (
    <div className="services-main-container">
      <div className="container text-black">
        <div className="row  ml-1 ml-sm-0 mr-sm-0 justify-content-center">
          <div className="mt-3 mb-5 pl-0">
            <h5 className="font-weight-bold">How do we work?</h5>
            <p className="h5">
              We provide a framework for your idea, which serves as a solid
              foundation. You have the flexibility to expand and customize it to
              meet your unique needs. You may choose to develop the framework
              independently, or you can work with our dedicated resources to
              bring your idea to life.
            </p>
          </div>

          <div class="card mr-3 mb-3 hoverZoom-box" style={{ width: "26rem" }}>
            <div class="card-body">
              <p class="card-text">
                The framework we provide is designed to be scalable and
                adaptable, so that it can grow and evolve as your idea develops.
              </p>
            </div>
          </div>

          <div class="card mr-3 mb-3 hoverZoom-box" style={{ width: "26rem" }}>
            <div class="card-body">
              <p class="card-text">
                Our goal is to empower you to take ownership of your idea and
                turn it into a successful venture.
              </p>
            </div>
          </div>

          <div class="card mr-3 mb-3 hoverZoom-box" style={{ width: "26rem" }}>
            <div class="card-body">
              <p class="card-text">
                We believe that by providing a strong starting point, you can
                save time and resources in the early stages of development.
              </p>
            </div>
          </div>

          <div class="card mr-3 mb-3 hoverZoom-box" style={{ width: "26rem" }}>
            <div class="card-body">
              <p class="card-text">
                Our team is dedicated to providing technical expertise, design
                services, and project management resources to support you.
              </p>
            </div>
          </div>

          <div class="card mr-3 mb-3 hoverZoom-box" style={{ width: "26rem" }}>
            <div class="card-body">
              <p class="card-text">
                We understand that every idea is unique, which is why we
                encourage you to customize the framework to suit your specific
                requirements.
              </p>
            </div>
          </div>

          <div class="card mr-3 mb-3 hoverZoom-box" style={{ width: "26rem" }}>
            <div class="card-body">
              <p class="card-text">
                Our approach is collaborative and flexible, so you can choose
                how involved you want to be in the development process.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* <div className="container-sm d-flex flex-wrap justify-content-center flex-row contain-cards">
        <div className="card-deck d-flex flex-wrap justify-content-center">
          <div className="card text-center col-md-4">
            <div className="card-body d-flex flex-column align-items-center py-5">
              <img
                src="https://www.unitedsol.net/wp-content/uploads/2021/06/web-design.webp"
                alt="logo"
                className="mx-auto card-logo"
              />
              <h4 className="card-title mt-3">
                Web Design & Development Services
              </h4>
              <p className="card-text ">
                Engaging and efficient web design and development solutions.
                Transcending convention through innovative web solutions.
              </p>
              <a href="#" className="link-primary">
                Read more
              </a>
            </div>
          </div>

          <div className="card text-center col-md-4">
            <div className="card-body d-flex flex-column align-items-center py-5">
              <img
                src="https://www.unitedsol.net/wp-content/uploads/2021/06/1.webp"
                alt="logo"
                className="mx-auto card-logo"
              />
              <h4 className="card-title mt-3">
                Web Design & Development Services
              </h4>
              <p className="card-text ">
                Engaging and efficient web design and development solutions.
                Transcending convention through innovative web solutions.
              </p>
              <a href="#" className="link-primary">
                Read more
              </a>
            </div>
          </div>

          <div className="card text-center col-md-4">
            <div className="card-body d-flex flex-column align-items-center py-5">
              <img
                src="https://www.unitedsol.net/wp-content/uploads/2021/06/2.webp"
                alt="logo"
                className="mx-auto card-logo"
              />
              <h4 className="card-title mt-3">
                Web Design & Development Services
              </h4>
              <p className="card-text e-small ">
                Engaging and efficient web design and development solutions.
                Transcending convention through innovative web solutions.
              </p>
              <a href="#" className="link-primary">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button className="button">
          All Services
          <img src={ArrowIcon} className="ml-2 text-primary arrow-img"></img>
        </button>
      </div> */}
    </div>
  );
}

export default Services;
