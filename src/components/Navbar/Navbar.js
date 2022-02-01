import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dropdown from "../Dropdown/Dropdown";

import {
  Nav,
  NavItem,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItemLogin,
  Button
} from "./NavbarElements";
import logo from "../../assets/images/collabsx_logo.svg";
import { IconContext } from "react-icons";

function Navbar({ toggle }) {
  const modalRef = useRef();

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", event => {
      if (!modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    });
  });

  // modal openClose
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  // End Modal

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer ref={modalRef}>
          <NavLogo to="/">
            <img src={logo} alt="Logo" width="200px" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <HiOutlineMenuAlt3 />
          </MobileIcon>
          <NavMenu>
            <IconContext.Provider value={{ size: "14px" }}>
              <NavItem>
                <NavLinks to="/"> Browse</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">
                  <Button onClick={openModal}>
                    <FaSearch style={{ color: "red" }} />
                    <span>Search</span>
                  </Button>
                  <Dropdown showModal={showModal} setShowModal={setShowModal} />
                </NavLinks>
              </NavItem>
            </IconContext.Provider>
          </NavMenu>
          <NavItemLogin>Login</NavItemLogin>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;

//<NavBtn>
//<NavBtnLink to="/signin">GET STARTED</NavBtnLink>
//</NavBtn>
