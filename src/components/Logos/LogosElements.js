import styled from "styled-components";

export const LogoContainer = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 0px;
  justify-content: center;
  align-items: bottom;
  z-index: 4;

  @media screen and (max-width: 960px) {
  }
`;
export const LogoRow = styled.div`
  @media screen and (max-width: 960px) {
  }
`;
export const Logo = styled.div``;

export const Logos = styled.div`
  padding: 0 1.5rem;
  opacity: 0.3;

  img {
    width: 13rem;
  }

  :hover {
    opacity: 1;
    transition: all ease-in-out 0s;
  }
`;
