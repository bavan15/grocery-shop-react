import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import offer from "../image/offer1.jpg";
import fish from "../image/offer2.jpg";
import arrival from "../image/offer3.jpg";

const ProductCarousel = () => {
  
  return (
    <Carousel pause="hover" className="bg-dark" >
      <Carousel.Item >
        <img src={offer} alt="First slide" style={{width:"100%",height:"500px"}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={arrival} alt="second slide" style={{width:"100%",height:"500px"}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={fish} alt="Third slide" style={{width:"100%",height:"500px"}}/>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
