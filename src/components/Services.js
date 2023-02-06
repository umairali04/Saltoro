import React from "react";
import ArrowIcon from '../assets/arrow-right.svg'

function Services() {
  return (
    <div className="services-main-container">
      <div className="container text-black d-flex justify-content-center align-item-center ">
        <div className="row  ml-1 ml-sm-0">
          <div className="mt-5 mb-5">
            <h2>Our Web Design and Development Services</h2>
          </div>
        </div>
      </div>

      <div className="container-sm d-flex flex-wrap justify-content-center flex-row contain-cards">
        <div class="card-deck">

          <div class="card text-center">
            <div class="card-body d-flex flex-column align-items-center py-5">
              <img
                src="https://www.unitedsol.net/wp-content/uploads/2021/06/web-design.webp"
                alt="logo"
                class="mx-auto"
              />
              <h4 class="card-title mt-3">Web Design & Development Services</h4>
              <p class="card-text ">
                Engaging and efficient web design and development solutions.
                Transcending convention through innovative web solutions.
              </p>
              <a href="#" class="link-primary">
                Read more
              </a>
            </div>
          </div>

          <div class="card text-center">
            <div class="card-body d-flex flex-column align-items-center py-5">
              <img
                src="https://www.unitedsol.net/wp-content/uploads/2021/06/1.webp"
                alt="logo"
                class="mx-auto"
              />
              <h4 class="card-title mt-3">Web Design & Development Services</h4>
              <p class="card-text ">
                Engaging and efficient web design and development solutions.
                Transcending convention through innovative web solutions.
              </p>
              <a href="#" class="link-primary">
                Read more
              </a>
            </div>
          </div>

          <div class="card text-center">
            <div class="card-body d-flex flex-column align-items-center py-5">
              <img
                src="https://www.unitedsol.net/wp-content/uploads/2021/06/2.webp"
                alt="logo"
                class="mx-auto"
              />
              <h4 class="card-title mt-3">Web Design & Development Services</h4>
              <p class="card-text ">
                Engaging and efficient web design and development solutions.
                Transcending convention through innovative web solutions.
              </p>
              <a href="#" class="link-primary">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
      <button type="button" class="btn btn-light btn-sm text-primary small">
              All Services
              <img src={ArrowIcon} className='ml-2 text-primary'></img>
            </button>
            </div>
    </div>
  );
}

export default Services;
