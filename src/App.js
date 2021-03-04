import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

// CSS
import './App.css';

// Components
import Header from './components/header/header'
import Footer from './components/footer/footer'

// Pages
import LoginPage from './pages/login/login'
import ContactPage from './pages/contact/contact'
import AboutPage from './pages/about/about'
import HomePage from './pages/home/home'
import AdminPanelPage from './pages/admin/deleteproduct/admin-panel'
import ProductOverviewPage from './pages/product-overview/product'
import CartsPage from './pages/carts/carts'

const App = () => {

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const isAdmin = useSelector(state => state.user)

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/" render={() => isLoggedIn? <Redirect to="/home"/> : <LoginPage/> }/>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/home" render={() => isLoggedIn? <HomePage/> : <LoginPage/> } />
            <Route exact path="/adminpanel" render={() => isAdmin.user.isAdmin ? <AdminPanelPage/> : <Redirect to="/home"/> } />
            <Route exact path="/home/:productid" render={() => isLoggedIn? <ProductOverviewPage/> : <LoginPage/> } />
            <Route exact path="/carts" render={() => isLoggedIn? <CartsPage/> : <LoginPage/> } />
          </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
