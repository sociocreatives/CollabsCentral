import React from "react";
import { Container, Logos } from "./SlidingElements";
// import Marquee from "react-easy-marquee";
import { LogoNames } from "./LogoNames";
import Slider from "react-slick";

function Sliding() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false
  };

  return (
    <Container>
      <Slider {...settings}>
        {LogoNames.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <Logos>
                  <img
                    src={item.image}
                    className="logos"
                    width="200px"
                    alt="slider"
                  />
                </Logos>
              </div>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
}

export default Sliding;
