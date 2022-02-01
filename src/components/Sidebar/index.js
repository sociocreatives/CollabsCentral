import React from "react";
import {
  SidebarContainer,
  Icon,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoutes,
  SidebarMenu,
  Contents
} from "./SidebarElements";
import close from "../../assets/images/close.svg";
// import home from "../../assets/images/home.svg";
import { Link } from "react-router-dom";
// import { GrHome } from "react-icons/gr";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <img src={close} alt="close" width="30px" className="close" />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            <Link to="/">Discover</Link>
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            <Link to="/">Products</Link>
          </SidebarLink>
        </SidebarMenu>
        <Contents>
          <form>
            <label className="labela">
              <input
                type="text"
                placeholder="Search Influencers, Products, Topics"
                className="inputtext"
              />
            </label>
          </form>
        </Contents>
        <SideBtnWrap>
          <SidebarRoutes>
            <Link to="/">LOGIN</Link>
          </SidebarRoutes>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
