import React from 'react'
import Logo from './assets/SALTORO-001.png'

function Header() {
  return (
//     <nav class="navbar navbar-expand-md navbar-light bg-light">
//     <div class="container">
//         <a class="navbar-brand" href="#">
//             <img src="logo.png" alt="Logo" width="50"/>
//         </a>

//         <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul class="navbar-nav">
//                 <li class="nav-item active">
//                     <a class="nav-link" href="#">Home</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">About</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Contact</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>
    <div className='a'>
    <nav className=" navbar navbar-expand-lg ml-auto mr-auto">
    <div class="container">
  <a className="navbar-brand navbar-left w-10" href="#"><img src={Logo} className='navbar-logo' /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end w-25 p-3 h-75" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active mr-3 ml-3">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item mr-3 ml-3">
        <a className="nav-link" href="#">Conact Us</a>
      </li>
      
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    <div></div>
  </div>
</div>
</nav>
</div>





  )
}

export default Header
