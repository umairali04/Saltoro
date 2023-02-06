import React from "react";
import abcd from "../abcd.jpg";

function BannerImage() {
  return (
    
    <div class="container-fluid bg-overlay  d-flex align-items-end">
      <div class="row h-100 align-items-center">
        <div class="col-12 col-md-6 text-black  text-md-left">
          <div className="container-sm ml-1 ml-sm-5">
            <h2>Web Development Company in Islamabad</h2>
            <p className="small">
              Being an award-winning web development company in Pakistan, we
              provide tailored end to end website design and web development
              services, creatively rich, supremely functional, and highly
              flexible for your unique needs and preferences. Read More
            </p>
            <button type="button" class="btn btn-primary btn-lg ">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>

    /* <div>
<div class="container-fluid  d-flex flex-column justify-content-center text-light bg-dark bg-overlay">
	<div class="row ml-3">
<div className='container'>
        <h3>Web Development Company in Islamabad</h3>
          <p className='small'>
          Being an award-winning web development company in Pakistan, we provide tailored
end to end website design and web development services, creatively rich, supremely
functional, and highly flexible for your unique needs and preferences.

Read More
          </p>
  <button type="button" class="btn btn-primary btn-lg ">Get Started</button>


		
        
	</div>
  </div>

  
  

</div>

</div> */
  );
}

export default BannerImage;
