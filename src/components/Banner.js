import React from "react";
import abcd from "../abcd.jpg";

function BannerImage() {
  return (
    <div className="container margin-top">
      {/* <div className="container text-black d-flex justify-content-center align-item-center ">
        <div className="row  ml-1 ml-sm-0">
          <div className="mt-5 mb-5">
            <h1 className="font-weight-bold">Saltoro Tech</h1>
          </div>
        </div>
      </div> */}

      <div className="row  ml-1 ml-sm-0">
        <div className="mt-5 pl-0">
          <h5 className="font-weight-bold">About Us</h5>
          <p className="h5">
            We at Saltoro Tech believe that tech has the potential to change the
            world for the better. In pursuit of this dream we aim to build tools
            and solutions that solve problems. We’re passionate about the
            Complete IoT product solution, Hybrid App, web, cloud, blockchain,
            decentralization, security and engineering productivity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerImage;
