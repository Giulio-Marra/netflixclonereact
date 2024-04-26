import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class AddelementCarouselTwo extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    this.fetchFilmList();
  }

  fetchFilmList = () => {
    fetch("http://www.omdbapi.com/?apiKey=536e9803&s=Avengers")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch films.");
        }
      })
      .then((data) => {
        this.setState({ films: data.Search });
      })
      .catch((error) => console.error("Error fetching films:", error));
  };

  render() {
    const settings = {
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
            slidesToShow: 1,
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
      <div className="slider-container mt-4">
        <Container fluid>
          <h2>Spiderman Films</h2>
          <Slider {...settings}>
            {this.state.films.map((film, index) => (
              <div key={index} className="m-2">
                <img
                  src={film.Poster}
                  alt={`Movie Poster ${index}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    );
  }
}

export default AddelementCarouselTwo;
