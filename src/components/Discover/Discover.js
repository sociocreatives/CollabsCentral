import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Data } from "./Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  DiscoverContainer,
  DiscoverHeader,
  Headerdivs,
  HeaderDivOne,
  HeaderDivTwo,
  HeaderDivThree,
  ButtonGroup,
  SliderOne,
  Disbody,
  CardBox1,
  ButtonOne,
  TextOne,
  Tabsone,
  Tabsy
} from "./DiscoverElements";
import Fade from "react-reveal/Fade";

function Discover() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <DiscoverContainer>
      <DiscoverHeader>
        Influncers
        <Headerdivs>
          <HeaderDivOne>Featured</HeaderDivOne>
          <HeaderDivOne>Most Popular</HeaderDivOne>
          <HeaderDivOne>Trending</HeaderDivOne>
          <HeaderDivOne>Just Added</HeaderDivOne>
          <HeaderDivThree>Explore All</HeaderDivThree>
        </Headerdivs>
        <Tabsone>
          <Tabsy></Tabsy>
        </Tabsone>
      </DiscoverHeader>

      <Disbody>
        <Carousel responsive={responsive}>
          {Data.map((item, index) => {
            return (
              <Fade up>
                <CardBox1 key={index}>
                  <img src={item.image} alt="" hight="200px" />
                  <h3>{item.title}</h3>
                  <p>{item.label}</p>
                </CardBox1>
              </Fade>
            );
          })}
        </Carousel>
      </Disbody>
    </DiscoverContainer>
  );
}

export default Discover;
