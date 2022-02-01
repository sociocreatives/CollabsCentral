import React from "react";
import { LogoContainer, LogoRow, Logo } from "./LogosElements";
import billboard from "../../assets/images/collabsx/billboard.svg";

function Logos() {
  return (
    <LogoContainer>
      <LogoRow>
        <Logo>
          <Logos>
            <img src={billboard} alt="team" width="100px" />
          </Logos>
          <Logos>
            <img src={billboard} alt="team" width="100px" />
          </Logos>
          <Logos>
            <img src={billboard} alt="team" width="100px" />
          </Logos>
          <Logos>
            <img src={billboard} alt="team" width="100px" />
          </Logos>
          <Logos>
            <img src={billboard} alt="team" width="100px" />
          </Logos>
          <Logos>
            <img src={billboard} alt="team" width="100px" />
          </Logos>
          <Logos>
            <img src={billboard} alt="team" width="100px" />
          </Logos>
        </Logo>
      </LogoRow>
    </LogoContainer>
  );
}

export default Logos;
