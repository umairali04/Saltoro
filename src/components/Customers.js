import React from "react";
import EndersgateLogo from '../assets/Endersgate_logo.webp'
import HeadGamesLogo from '../assets/5HEADGAMES Final.webp'
import NexioLogo from '../assets/nexio-logo.png'
import MpTechLogo from '../assets/MpTech.png'
import MatrixLogo from '../assets/matrix.png'


function Customers() {
  return (
    <div className="services-main-container">
      <div className="container text-black">
        <div className="row  ml-1 ml-sm-0">
          <div className="mt-5 mb-3 mb-sm-1">
            <h5 className="d-flex justify-content-center font-weight-bold ">
              Trusted by companies across the world
            </h5>
            <div className="customers-logo">
              <img src={HeadGamesLogo} style={{width: "7rem", height:""}}/>
              <img src={MpTechLogo} style={{width: "8rem", height:"8rem"}}/>
              <img src={NexioLogo} style={{width: "10rem"}}/>
              <img src={MatrixLogo} style={{width: "6rem"}}/>
              <img src={EndersgateLogo} style={{width: "15rem"}}/>
              </div>
          </div>

          


        </div>
      </div>
    </div>
  );
}

export default Customers;
