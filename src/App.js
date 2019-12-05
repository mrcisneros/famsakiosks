/** @format */

import React from "react";
import logo from "./logo.png";
import { BrowserRouter, Route, Link } from "react-router-dom";
import FamsaInc from "./components/FamsaInc";
import FamsaFin from "./components/FamsaFin";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' />
        <Route path='/famsainc' component={FamsaInc} />
        <Route path='/famsafin' component={FamsaFin} />

        <div className='navigation'>
          <Link to='/'>
            <img
              src={logo}
              className='logo-image'
              alt='Logo Image'
              width='45px'
            />
          </Link>
          <div className='navigation-sub'>
            <Link to='/famsainc' className='item'>
              FamsaInc
            </Link>
            <Link to='/famsafin' className='item'>
              FamsaFin
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
