import React from 'react'
import Logo from './assets/SALTORO-001.png'

function Footer() {
  return (
    // <!-- Footer -->
    <div style={{backgroundColor: "#f1f0ef"}}>
<footer className="container text-center text-lg-start text-muted">
  <div className='text-center'>
    <img src={Logo} className='footer-logo'/>
  </div>


  {/* <!-- Section: Links  --> */}
  
  <div className="text-center">
    © 2023 Copyright:
    {/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
  </div>
  {/* <!-- Copyright --> */}
</footer>
</div>
  )
}

export default Footer
