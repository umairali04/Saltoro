import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';


function ContactUs() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tp03yn8', 'template_zjv8w77', form.current, '1p_zfiW0UOnjx09GP')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Form Submitted successfully")
      }, (error) => {
          console.log(error.text);
      });
  };
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
        
        <form ref={form} onSubmit={sendEmail}>
  <div class="form-row">

    <div class="form-group col-md-4">
      <label for="name">Full Name</label>
      <input type="text" class="form-control" id="inputName" name="user_name" placeholder="Your Name" required/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" name="user_email" placeholder="Email" required/>
    </div>

    <div class="form-group col-md-4">
      <label for="inputPhone">Phone number</label>
      <input type="phone" class="form-control" id="inputPhone" name="user_phone" placeholder="Phone" required/>
    </div>
    
  </div>


  
  <div class="form-row align-center">
    <div class="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" name="user_city" id="inputCity" required/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <input type="text" class="form-control" name="state" id="inputZip" required/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip" >Zip</label>
      <input type="text" class="form-control" name="zip" id="inputZip"/>
    </div>
  </div>

  <div class="form-group col-md-12 textArea">
    <label for="exampleFormControlTextarea1" >Requirements</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" name="user_requirements" rows="8" required></textarea>
  </div>

  <div class="custom-file">
  <label class="custom-file-label col-md-4" for="customFile"  style={{cursor: "pointer"}} >Choose file</label>
    <input type="file" class="custom-file-input" id="customFile" name="file" />
  </div>

  {/* <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <button type="submit" class="btn btn-primary mt-3">Submit</button>
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
