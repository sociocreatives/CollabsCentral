import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  padding: 0 1rem;
  position: relative;
  margin-top: 0px;
  color: #fff;
  background-attachment: fixed;
  /* border-bottom: 0.015rem #c33434 dotted; */
  /* border: 0.5rem #a61916 solid; */

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
  }

  @media screen and (max-width: 960px) {
    height: 80vh;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  z-index: 3;
  padding: 0 1rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-with: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

export const HeroH1 = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #c33434;
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  line-height: 4rem;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 960px) {
    /* display: flex; */
    /* flex-direction: column-reverse; */
    align-content: center;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    justify-content: center;
    font-size: 2rem;
  }
`;

export const HeroH2 = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  line-height: 4rem;
  font-family: "Montserrat", sans-serif;

  span {
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 960px) {
    /* display: flex; */
    /* flex-direction: column-reverse; */
    align-content: center;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    justify-content: center;
    font-size: 0.9rem;
  }
`;

export const HeroImg = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight: 600;
  font-size: 2rem;
  margin-top: 1rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;
