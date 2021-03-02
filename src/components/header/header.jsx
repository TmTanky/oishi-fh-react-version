import React from 'react' 
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

// Actions Redux
import {logoutUser, loggedIn} from '../../redux/actions/actions'

const Header = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const isAdmin = useSelector(state => state.user)

    const handleLogout = () => {
      dispatch(logoutUser())
      dispatch(loggedIn())
      window.localStorage.removeItem('token')
    }

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
          <Link className="nav-link active" aria-current="page" to="/"> Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact"> Contact </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about"> About </Link>
        </li>
    { isLoggedIn ? <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Options
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {isAdmin.user.isAdmin ? 
              <li><Link className="dropdown-item" to="/adminpanel">Admin Panel</Link></li>
            : <li><a className="dropdown-item" href="#"> Carts </a></li> }
            <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
          </ul>
        </li> : "" }
      </ul>
    </div>
  </div>
</nav>
    )
}


export default Header