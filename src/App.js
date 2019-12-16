/** @format */

import React from "react";
import logo from "./logo.png";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import "materialize-css/dist/css/materialize.min.css";
// import { Button, Card, Row, Col } from "react-materialize";
import "./App.css";
import FamsaInc from "./components/FamsaInc";
import FamsaFin from "./components/FamsaFin";
import Products from "./components/Products";
import Banner from "./components/Banner";
import { Nav, Image, ButtonGroup, Button } from "react-bootstrap";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import FooterPage from "./components/Footer";
function App() {
  return (
    // <BrowserRouter>
    //   <div className='App'>
    //     <Nav className='justify-content-center'>
    //       <div className='navigation-sub'>
    //         <Link to='/famsainc' className='item'>
    //           FamsaInc
    //         </Link>
    //         <Link to='/'>
    //           <img
    //             src={logo}
    //             className='logo-image'
    //             alt='Logo Image'
    //             width='45px'
    //           />
    //         </Link>
    //         <Link to='/famsafin' className='item'>
    //           FamsaFin
    //         </Link>
    //       </div>
    //     </Nav>
    //     <Route exact path='/' />
    //     <Route path='/famsainc' component={FamsaInc} />
    //     <Route path='/famsafin' component={FamsaFin} />
    //   </div>
    //   <Products />
    // </BrowserRouter>
    <div className=''>
      <Banner />
      {/* <Nav className='justify-content-center' activeKey='/home'>
        <Nav.Item>
          <Nav.Link href='/home'>Furniture</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href=''>
            
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href=''>
            
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
      <div className='d-flex flex-column'>
        {/* <ButtonGroup size='lg'>
          <Button variant='outline-danger' style={{ borderRadius: "0" }}>
            <FamsaFin />
          </Button>
          <Button variant='link'>
            <Image src={logo} width='130px' />
          </Button>
          <Button variant='outline-danger' style={{ borderRadius: "0" }}>
            <MDBIcon far icon='money-bill-alt' /> Famsa Loans
          </Button>
        </ButtonGroup> */}
      </div>
      <Products />
    </div>
  );
}

export default App;
