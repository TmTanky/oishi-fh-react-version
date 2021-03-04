import React from 'react' 
import {useSelector, useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'

// Actions Redux
import {logoutUser, loggedIn, logoutClearCart} from '../../redux/actions/actions'

const Header = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const isAdmin = useSelector(state => state.user)

    const handleLogout = () => {
      dispatch(logoutClearCart())
      dispatch(logoutUser())
      dispatch(loggedIn())
      window.localStorage.removeItem('token')
      history.push('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> Oishi FoodHub </Link>
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
          <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" to="#" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => {
            return null
          }}>
            Options
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {isAdmin.user.isAdmin ? 
              <li><Link className="dropdown-item" to="/adminpanel">Admin Panel</Link></li>
            : <li><Link className="dropdown-item" to="/carts"> Carts </Link></li> }
            <li><Link className="dropdown-item" to="#" onClick={handleLogout}>Logout</Link></li>
          </ul>
        </li> : "" }
      </ul>
    </div>
  </div>
</nav>
    )
}


export default Header