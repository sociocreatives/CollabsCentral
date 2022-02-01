import styled from "styled-components";

export const BenefitsContainer = styled.section`
  margin-top: 6rem;
  margin-bottom: 6rem;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 70px;
  justify-content: center;
  align-items: bottom;

  @media screen and (max-width: 960px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px;
    justify-content: center;
    align-items: bottom;
  }
`;

export const BenefitsRow = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1.2fr 1.3fr;
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
    grid-template-columns: 1fr;
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

export const RowOne = styled.div`
  margin-right: 2rem;
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #fff;
    line-height: 3.5rem;
  }

  @media screen and (max-width: 960px) {
    margin-right: 0rem;
    text-align: center;
  }
`;
export const RowTwo = styled.div`
  border-radius: 20px;
  width: 100%;
  display: flex;
  min-width: 300px;
  border-radius: 20px;

  video {
    width: 100%;
    border-radius: 20px;
  }

  :hover {
    color: #fff;
    opacity: 0.5;
  }

  @media screen and (max-width: 960px) {
    margin-top: 2rem;
    border-radius: 5px;

    video {
      width: 100%;
      border-radius: 5px;
    }
  }
`;

export const Ptext = styled.div`
  border-bottom: 0.0125rem solid #191c21;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  font-weight: 100;
  font-size: 1.1rem;
  line-height: 2rem;

  @media screen and (max-width: 960px) {
    line-height: 1.5rem;
  }
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
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

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    color: #a61916;
    text-align: center;
    align-content: center;
    justify-content: center;
    margin-top: 1rem;
  }
`;
