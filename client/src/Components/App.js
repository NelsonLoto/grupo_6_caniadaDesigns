import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import '../styles/App.css'

import Main from './Main'
import Sidebar from './Sidebar'
import ProductsList from './ProductsList'
import axios from 'axios'


 

class App extends Component {

  checkLogin = () => {
    var AuthCookie =  sessionStorage.setItem('user_id');

    if (AuthCookie === undefined) {
        console.log("null");
        localStorage.setItem("auth", false);
    }

    if (AuthCookie === false) {
        console.log("false");
    }
    else if (AuthCookie === true) {
        console.log("true");
    }
    else {
        console.log("AuthCookie is neither false or true");
    }
  }

  render(){
    return (
      <div className="App">
        <div id="wrapper">
          <Router>
            <Sidebar />
            <Switch>
              //aca va la autenticacion
              //pop up de login si no esta logueado, en session(?)
  
  
              //auth0??
            
              <Route path="/" exact component={Main} />
              <Route path="/products_list" exact component={ProductsList} />
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
   





 
  
}


export default App
