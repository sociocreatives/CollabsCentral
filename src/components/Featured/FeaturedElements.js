import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  /* padding: 0 1rem; */
  position: relative;
  margin-top: 80px;
  color: #fff;

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
      linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%);
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
  /* border-radius: 20px; */
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
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  max-width: 600px;

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
  border-radius: 50px;
  background: #e62524;
  white-space: nowrap;
  padding: 10px 24px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  outline: none;
  border: none;
  margin: auto;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;

  &:hover {
    background: #ffffff;
    color: #e62524;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 960px) {
    /* display: flex; */
    /* flex-direction: column-reverse; */
    align-content: center;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    justify-content: center;
    font-size: 0.75rem;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    padding: 5px 22px;
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
  font-size: 1rem;
  margin-top: 1rem;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;
export const Herop = styled.div`
  padding: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
`;
export const Herot = styled.div`
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    line-height: 1.2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  color: #a61916;
  margin-top: 1rem;

  :hover {
    color: white;
    transform: translateX(10px);
    transition: all ease-in-out 1s;
  }
`;
