import React from "react";
import { MdArrowForward } from "react-icons/md";

import {
  BenefitsContainer,
  BenefitsRow,
  RowOne,
  RowTwo,
  Ptext,
  Btn
} from "./BenefitsElements";
import Video from "../../assets/videos/man_athletic.mp4";

function Benefits() {
  return (
    <BenefitsContainer>
      <BenefitsRow>
        <RowOne>
          <h1>Learn Anything Anywhere, at Your Own Pace</h1>
          <Ptext>Learn Valuable Skills From Mega Influencers</Ptext>
          <Ptext>
            A platform where influencers come to create crossover class
          </Ptext>
          <Ptext>
            Your purchases stay yours forever. No Monthly Fee - EVER!
          </Ptext>
          <Btn>
            <span>Get Started</span> <MdArrowForward />
          </Btn>
        </RowOne>
        <RowTwo>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </RowTwo>
      </BenefitsRow>
    </BenefitsContainer>
  );
}

export default Benefits;
