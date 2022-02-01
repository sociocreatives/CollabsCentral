import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest
} from "react-icons/fa";
import {
  BottomContainer,
  BottomRow,
  BottomLinks,
  BottomLinksTwo,
  BottomLinksThree,
  Contents,
  Linktext,
  LinktextH1,
  Linktexticons,
  Icons
} from "./BottomElements";

function BottomFooter() {
  return (
    <BottomContainer>
      <BottomRow>
        <Contents>
          <BottomLinks>
            <LinktextH1>Who We Are</LinktextH1>
            <Linktext>About Us</Linktext>
            <Linktext>Contact Us</Linktext>
            <Linktext>Work With Us</Linktext>
          </BottomLinks>
          <BottomLinksTwo>
            <LinktextH1>Explore</LinktextH1>
            <Linktext>Discover</Linktext>
            <Linktext>Products</Linktext>
            <Linktext>Terms & Conditions</Linktext>
          </BottomLinksTwo>
          <BottomLinksThree>
            <LinktextH1>Connect</LinktextH1>
            <Icons>
              <Linktexticons>
                <FaFacebook />
              </Linktexticons>
              <Linktexticons>
                <FaTwitter />
              </Linktexticons>
              <Linktexticons>
                <FaInstagram />
              </Linktexticons>
              <Linktexticons>
                <FaPinterest />
              </Linktexticons>
            </Icons>
          </BottomLinksThree>
        </Contents>
      </BottomRow>
    </BottomContainer>
  );
}

export default BottomFooter;
