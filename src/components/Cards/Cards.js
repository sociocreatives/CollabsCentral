import React from "react";
import { CardContainer } from "./CardsElements";
import { Data } from "./Data";
import Slider from "react-slick";

// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Cards() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <CardContainer>
      <Slider {...settings}>
        {Data.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="picha"
                style={{
                  backgroundImage: `url(${item.image})`,
                  height: "550px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  margin: "10px"
                }}
              >
                {/* <ImageOne>{item.title}</ImageOne> */}
              </div>
            </div>
          );
        })}
      </Slider>
    </CardContainer>
  );
}

export default Cards;
