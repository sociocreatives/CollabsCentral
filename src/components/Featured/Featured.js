import React from "react";
import Video from "../../assets/videos/video2.mp4";
import { MdArrowForward } from "react-icons/md";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroText,
  Herop,
  Herot,
  Btn
} from "./FeaturedElements";
// import Spin from "react-reveal/Spin";

// import featured from "../../assets/images/collabsx/miriam.jpg";

function Featured() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroText>
          <HeroH1>Trending</HeroH1>
          <Herop>New Master Class</Herop>
          <Herot>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Herot>
          <Btn>
            <span>Get Started</span> <MdArrowForward />
          </Btn>
        </HeroText>
      </HeroContent>
    </HeroContainer>
  );
}

export default Featured;
//<img src={featured} alt="Logo" width="100%" />
