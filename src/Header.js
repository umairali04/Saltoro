import React from 'react'
import Logo from './assets/SALTORO-001.png'

function Header() {
  return (
    <div className='a'>
    <nav className=" navbar navbar-light bg-light navbar-expand-lg">
  <a className="navbar-brand navbar-left w-10" href="#"><img className='navbar-logo' /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mr-auto">
      <li className="nav-item active mr-3 ml-3">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item mr-3 ml-3">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item mr-3 ml-3">
        <a className="nav-link" href="#">Projects</a>
      </li>
      <li className="nav-item mr-3 ml-3">
        <a className="nav-link" href="#">Web</a>
      </li>
      <li className="nav-item mr-3 ml-3">
        <a className="nav-link" href="#">Mobile</a>
      </li>
      <li className="nav-item dropdown mr-3 ml-3">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0 flex">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>

</nav>
</div>





  )
}

export default Header
