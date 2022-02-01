import React, { useState } from "react";
import {
  Container,
  Row,
  RowH1,
  RowTwo,
  RowThree,
  NavigationM,
  Navlinks
} from "./InfluencersElements";
import Fade from "react-reveal/Fade";
import { Data } from "./Data";

function Influencers() {
  //   const [clicked, setClicked] = useState(false);

  //   const toggle = index => {
  //     if (clicked === index) {
  //       return setClicked(null);
  //     }
  //     setClicked(index);
  //   };

  return (
    <Container>
      <Row>
        <RowH1>DISCOVER INFLUENCERS</RowH1>
        <RowTwo>
          <NavigationM>
            <Navlinks>Featured</Navlinks>
            <Navlinks>Most Popular</Navlinks>
            <Navlinks>Trending</Navlinks>
            <Navlinks>Just Added</Navlinks>
          </NavigationM>
        </RowTwo>
        <RowThree>See All</RowThree>
      </Row>
    </Container>
  );
}

export default Influencers;
//<Fade up>
