import React from 'react'

function ContactUs() {
  return (
    <div className='container'>
        <div className="container text-black d-flex justify-content-center align-item-center ">
        <div className="row  ml-1 ml-sm-0">
          <div className="mt-5 mb-5">
            <h1 className="font-weight-bold">Contact Us</h1>
          </div>
        </div>
      </div>
        <div className='d-flex justify-content-center align-center'>
        <form>
  <div class="form-row">

    <div class="form-group col-md-4">
      <label for="name">Full Name</label>
      <input type="text" class="form-control" id="inputName" placeholder="Your Name"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>

    <div class="form-group col-md-4">
      <label for="inputPhone">Phone number</label>
      <input type="phone" class="form-control" id="inputPhone" placeholder="Phone"/>
    </div>
    
  </div>


  
  <div class="form-row align-center">
    <div class="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>

  <div class="form-group col-md-12 textArea">
    <label for="exampleFormControlTextarea1">Requirements</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>

  <div class="custom-file">
  <label for="inputZip">Zip</label>

  <label class="custom-file-label" for="customFile"  style={{cursor: "pointer"}}>Choose file</label>
    <input type="file" class="custom-file-input" id="customFile"/>
  </div>

  {/* <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>


{/* social icons */}
    <div className='text-center mt-5'>
    {/* <!-- Left --> */}
      <span >Connect with us</span>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div className='d-flex justify-content-center gap-4 mt-3 mb-5'>
      <a href="" className="link-secondary">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="link-secondary">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div>

    </div>
    {/* <!-- Right --> */}
  {/* <!-- Section: Social media --> */}







    </div>

  )
}

export default ContactUs
