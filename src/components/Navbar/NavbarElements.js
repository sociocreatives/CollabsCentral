import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: "Montserrat", sans-serif;
  transition: 0.8s all ease;

  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 60px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  cursor: pointer;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
    transform: translateX(-35px);
  }
`;

export const MobileIcon = styled.div`
  display: none;
  /* display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  position: absolute;
  color: #fff;
  top: 1rem;
  right: 0;
  transform: translate(-100%, 40%);
  font-size: 2rem;
  cursor: pointer; */
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    color: #fff;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 82px;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  font-weight: 600;

  :hover {
    color: #c33434;
  }
`;

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  /* gap: 0.5rem; */
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;

  &.active {
    border-bottom: 3px solid grey;
  }

  span {
    padding-left: 5px;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-right: 0.5rem;
    :hover {
      color: #c33434;
    }
  }

  :hover {
    color: #c33434;
  }
`;

export const NavBtn = styled.nav`
  display: block;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 10px;
  padding: 5px 22px;
  color: red;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
`;

export const NavItemLogin = styled(LinkR)`
  color: white;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Montserrat", sans-serif;
  padding-right: 10px;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  font-weight: 600;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-left: 2rem;
    color: #c33434;
  }
  &:active {
    border: none;
  }

  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    padding-right: 1rem;
    display: none;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  margin: 10px 0px;
  cursor: pointer;
  display: flex;
  justify-items: center;
  align-items: center;
  transition: 2s ease-in-out all;
  font-weight: 600;

  :onclick {
    transform: translateX(10px);
  }
`;
