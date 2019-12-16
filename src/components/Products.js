/** @format */

import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import { Carousel, Badge, Image, Row, Col } from "react-bootstrap";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], token: "", height: "" };
  }
  updateSize = () => {
    this.setState({
      height:
        window.innerHeight -
        document.getElementById("img-banner").clientHeight +
        "px"
    });
  };
  getProducts = () => {
    const urlToken =
      /*"http://192.168.21.105/FamsaApi/api/Token"; */ "http://192.168.21.25:7002/api/Token";
    const urlProductPrice =
      /* "http://192.168.21.105/FamsaApi/api/Location";*/ "http://192.168.21.25:7002/api/ProductPrice";
    fetch(urlToken, {
      method: "POST",
      headers: new Headers(),
      body: JSON.stringify({})
    })
      .then(res => res.json())
      .then(token => {
        fetch(urlProductPrice, {
          headers: {
            Authorization: token
          }
        })
          .then(res => res.json())
          .then(products => {
            this.setState({
              products: products
            });
            //console.log(products);
            this.updateSize();
            window.addEventListener("resize", this.updateSize);
          })
          .catch(err => console.log("Error retrieving locations.", err));
      })
      .catch(err => console.log("Error retrieving token.", err));
  };
  componentDidMount() {
    /*Runs every 4 hours */
    this.getProducts();
    this.interval = setInterval(() => this.getProducts(), 14400000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <CarouselProducts
        products={this.state.products}
        height={this.state.height}
      />
    );
  }
}

function CarouselProducts({ products, height }) {
  return (
    <Carousel
      interval='15000'
      controls={true}
      slide={false}
      indicators={true}
      fade={true}
      className='pt-4'>
      {products
        .filter(
          product =>
            // product.RegularPrice === null &&
            // product.BeginDate === null &&
            // product.EndDate === null

            product.ProductImage.length > 0
          // &&
          // product.RegularPrice !== null &&
          // product.RegularPrice > 0 &&
          // product.BeginDate !== null &&
          // product.EndDate !== null
        )
        .map((product, i) => (
          <Carousel.Item key={i}>
            <Row>
              <Col md={6}>
                {" "}
                <div
                  style={{
                    width: "100%",
                    position: "relative",
                    overflow: "hidden",
                    height: height
                  }}>
                  <img
                    className='d-block'
                    src={product.ProductImage[0]}
                    alt={"Slide-" + product.ProductId}
                    style={{
                      width: "auto",
                      height: "80%",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                  />
                </div>
              </Col>
              <Col md={6} className='mt-0 pt-0'>
                <Row
                  className='mt-0 pt-0'
                  style={{ verticalAlign: "baseline" }}>
                  <Col md={12} className='text-center pt-4'>
                    <Image
                      src={
                        "https://famsafurniture.com//assets/custom/img/Famsa-Furniture-Logo.png"
                      }
                      width='50%'
                    />
                  </Col>
                  <Col
                    md={12}
                    className='p-4 border border-0 text-center'
                    style={{
                      color: "#064092"
                    }}>
                    <Badge
                      pill
                      style={{
                        padding: "5px 20px",
                        color: "#ffffff",
                        backgroundColor:
                          product.RegularPrice !== null &&
                          product.RegularPrice > 0 &&
                          product.BeginDate === null &&
                          product.EndDate === null
                            ? "#fff200"
                            : product.RegularPrice !== null &&
                              product.RegularPrice > 0 &&
                              product.BeginDate !== null &&
                              product.EndDate !== null
                            ? "#23aae1"
                            : "#0c56a4"
                      }}>
                      {product.RegularPrice !== null &&
                      product.RegularPrice > 0 &&
                      product.BeginDate === null &&
                      product.EndDate === null
                        ? "Special Price"
                        : product.RegularPrice !== null &&
                          product.RegularPrice > 0 &&
                          product.BeginDate !== null &&
                          product.EndDate !== null
                        ? "Promo Price"
                        : "Regular Price"}
                    </Badge>
                    <h1
                      className='text-danger'
                      style={{ textShadow: "2px 2px #ffffff" }}>
                      $ {product.SalePrice}{" "}
                      <MDBIcon
                        icon='tags'
                        className='pr-3'
                        style={{
                          color:
                            product.RegularPrice !== null &&
                            product.RegularPrice > 0 &&
                            product.BeginDate === null &&
                            product.EndDate === null
                              ? "#fff200"
                              : product.RegularPrice !== null &&
                                product.RegularPrice > 0 &&
                                product.BeginDate !== null &&
                                product.EndDate !== null
                              ? "#23aae1"
                              : "#0c56a4"
                        }}
                      />
                      {product.RegularPrice !== null &&
                      product.RegularPrice > 0 &&
                      product.BeginDate !== null &&
                      product.EndDate !== null ? (
                        <sub
                          style={{
                            textDecoration: "line-through",
                            fontSize: "15px",
                            fontWeight: "bolder"
                          }}>
                          Reg:${product.RegularPrice}
                        </sub>
                      ) : (
                        ""
                      )}
                    </h1>
                    <h5 style={{ padding: "20px 45px", textAlign: "justify" }}>
                      {product.ProductBenefits}
                    </h5>
                    <h4>{product.ProductId}</h4>
                    <h5>{product.LocationName}</h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}
