import styled from "styled-components";
import bg from "../../assets/images/bg4.svg";

export const CryptoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  /* background: url(${bg}); */
  background-position: cover;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3rem;
  /* border-bottom: 0.1rem #202020 solid; */
  margin-top: 4rem;

  @media screen and (max-width: 960px) {
    margin-top: 1rem;
  }
`;

export const CryptoContent = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: bottom;
`;
export const CryptoRows = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 2fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin-bottom: 3rem;
  color: white;

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
    padding: 1rem;
  }
`;

export const CryptoColOne = styled.div`
  @media screen and (max-width: 960px) {
    border: none;
    padding: 0px;
  }
`;

export const CryptoColTwo = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin-bottom: 3rem;
  color: white;
  justify-content: center;
  justify-items: center;
  align-content: center;
  text-align: left;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: minmax(auto, 1fr);
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 1rem;
  }
`;

export const CryptoBox = styled.div`
  padding: 2rem;
  background-color: transparent;
  color: #e62524;
  border-left: 1px solid #202020;

  @media screen and (max-width: 960px) {
    border-left: none;
  }
`;
export const CryptoImg = styled.div`
  padding-bottom: 1rem;
  /* display: flex; */
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;
export const CryptoCounter = styled.div`
  font-size: 1rem;
  font-weight: 200;
  color: #fff;
  margin-left: 0.25rem;

  span {
    background-color: #e62524;
    border-radius: 50%;
    padding: 0.5rem 0.5rem;
    height: 1rem;
    width: 1rem;
  }

  @media screen and (max-width: 960px) {
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding-top: 0.25rem;
    padding-left: 0rem;
  }
`;
export const CryptoHeader = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 6rem;
  color: #e62524;
  line-height: 3.5rem;
  padding-bottom: 1rem;

  span {
    color: white;
  }

  @media screen and (max-width: 960px) {
    font-size: 3.5rem;
    line-height: 2.2rem;
  }
`;

export const Imahinario = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const Cryptop = styled.p`
  font-weight: 300;
  span {
    font-size: 1.1rem;
    color: #e62524;
    font-weight: 800;
  }
  /* background-image: linear-gradient(45deg, #6303b1); */
  /* transform: skewY(-6deg); */
`;

export const TeamButton = styled.div`
  background-color: #e62524;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;

  :hover {
    background-color: #fff;
    color: #e62524;
    width: 100%;
    transition: 0.25s ease-in-out all;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
  }
`;

export const Name = styled.div`
  color: #fff;
  padding-left: 1rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding-top: 1rem;
    padding-left: 0rem;
  }
`;
