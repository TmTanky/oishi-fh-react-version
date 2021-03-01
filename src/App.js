import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// CSS
import './App.css';

// Components
import Header from './components/header/header'
import Footer from './components/footer/footer'

// Pages
import LoginPage from './pages/login/login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/" component={LoginPage} />
          </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
