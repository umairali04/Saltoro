import React from 'react'
import Logo from './assets/Saltoro-logo.png'

function Header() {
  return (
    <div className='a'>
    <nav className="navbar navbar-expand-lg">
    <div class="container">
  <a className="navbar-brand navbar-left" href="#">
    <img src={Logo} className='navbar-logo' />
  </a>
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
