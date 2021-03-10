import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'

import '../styles/App.css';

import Main from './Main'
import Sidebar from "./Sidebar"
import ProductsList from "./ProductsList"

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/products_list" exact component={ProductsList} />
          </Switch>
        </Router>
      </div>

    </div>
  )
}

export default App;
