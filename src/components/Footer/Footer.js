import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterLeft,
  FooterRight,
  FooterRows,
  FooterMiddle
} from "./FooterElements";
import logo from "../../assets/images/collabsx_logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterRows>
          <FooterLeft>
            <img src={logo} alt="icon" width="200px" />
          </FooterLeft>
          <FooterRight>
            <Link to="/privacy">Privacy Policy</Link>
          </FooterRight>
          <FooterMiddle>© 2021 CollabsX</FooterMiddle>
        </FooterRows>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

//<Link to="/terms">Privacy Policy | Terms of use | Disclaimer</Link>
