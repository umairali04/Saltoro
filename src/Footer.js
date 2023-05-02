import React from 'react'
import Logo from './assets/Saltoro-logo.png'

function Footer() {

  const year = new Date().getFullYear();
  return (
    // <!-- Footer -->
    <div className=' pb-3' style={{backgroundColor: "transparent"}}>
<footer className="container text-center text-lg-start text-muted">
  <div className='text-center'>
    {/* <img src={Logo} className='footer-logo'/> */}
    <h4 className='pt-2'>SALTORO TECH</h4>
    {/* <text>LETS BUILD SOMETHING BIG TOGETHER</text> */}
  </div>


  {/* <!-- Section: Links  --> */}
  
  <div className="text-center">
    Copyright © {year} Saltoro Tech . All Rights Reserved.
    {/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
  </div>
  {/* <!-- Copyright --> */}
</footer>
</div>
  )
}

export default Footer
