import styled from "styled-components";
// import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  background-color: #191c21;
`;

export const FooterContent = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  font-weight: 200;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding-bottom: 1rem;
  }
`;

export const FooterRight = styled.div`
  text-align: right;
  font-weight: 200;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const FooterRows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 1rem 1rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
    padding: 1rem;
    /* display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    margin-bottom: 4rem; */
  }
`;

export const FooterMiddle = styled.div`
  padding: 1.5rem;
`;
