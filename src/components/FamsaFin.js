/** @format */

import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { MDBBtn, MDBIcon } from "mdbreact";

class FamsaFin extends Component {
  render() {
    return (
      <div>
        <MDBIcon
          far
          icon='credit-card'
          style={{
            borderRadius: "50%",
            maxWidth: "100%",
            height: "auto",
            border: "1px solid red",
            padding: "15px"
          }}
        />{" "}
        Famsa Credit
      </div>
    );
  }
}

export default FamsaFin;
