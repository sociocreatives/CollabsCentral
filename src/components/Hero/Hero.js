import React, { useState } from "react";
import Video from "../../assets/videos/video.mp4";
import Typewriter from "typewriter-effect";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroText
} from "./HeroElements";

function Hero() {
  const [state] = useState({
    title: ""
  });

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroText>
          <HeroH1>Master New Skills Today</HeroH1>
          <HeroH2>
            <span>{state.title}</span>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Learn How to Build Social Skills",
                  "Learn How to Develop Stoic Discipline",
                  "Learn How to Master the Twitter Game",
                  "Learn The Art of Dark Psychology"
                ]
              }}
            />
          </HeroH2>
        </HeroText>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
//<img src={featured} alt="Logo" width="100%" />
