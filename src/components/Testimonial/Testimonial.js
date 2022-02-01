import React from "react";
import {
  Container,
  Content,
  Avatar,
  Box,
  Heading
} from "./TestimonialElements";
import { Data } from "./Data";
import Slider from "react-slick";

function Testimonial() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    arrows: false,
    autoplaySpeed: 3000,
    loop: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container>
      <Heading>See What People Are Saying</Heading>
      <Slider {...settings}>
        {Data.map((item, index) => {
          return (
            <Content key={index}>
              <Avatar style={{ backgroundImage: `url(${item.image})` }}>
                <Box>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </Box>
              </Avatar>
            </Content>
          );
        })}
      </Slider>
    </Container>
  );
}

export default Testimonial;
