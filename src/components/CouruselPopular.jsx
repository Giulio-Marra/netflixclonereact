import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";
import img4 from "../assets/img/4.png";
import img5 from "../assets/img/5.png";
import img6 from "../assets/img/6.png";

function CenterMode() {
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "30px",
    centerMode: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Container fluid>
        <h1>Trending on moment</h1>
        <Slider {...settings}>
          {[img1, img2, img3, img4, img5, img6].map((image, index) => (
            <div key={index} className="m-2">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="img-fluid"
              />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default CenterMode;
