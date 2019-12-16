/** @format */
import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Axios from "axios";
export default class Banner extends Component {
  state = {};
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  CarouselItem = () => {
    return <Carousel.Item></Carousel.Item>;
  };
  render() {
    // console.log(this.state);
    return (
      <Carousel id='img-banner'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://famsafurniture.com//repository/image/FamsaWebPage/LandingPage/Carrousel/2019-Primary-promo-11-web-Eng4.jpg'
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://famsafurniture.com//repository/image/FamsaWebPage/LandingPage/Carrousel/2019-Primary-promo-11-web-Eng1-150ppi.jpg'
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://famsafurniture.com//repository/image/FamsaWebPage/LandingPage/Carrousel/2019-Primary-promo-11-web-Eng4.jpg'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
