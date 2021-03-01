import React from 'react' 
import {useSelector} from 'react-redux'

const Header = () => {

    const isLoggedIn = useSelector(state => state.isLoggedIn)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> Oishi FoodHub </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> Contact </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> About </a>
        </li>
    { isLoggedIn ? <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Options
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Edit Profile</a></li>
            <li><a className="dropdown-item" href="#">Carts</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li> : "" }
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header