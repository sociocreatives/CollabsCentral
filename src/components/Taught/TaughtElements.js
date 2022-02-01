import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 64px;
  justify-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 30px;
    justify-content: center;
    align-items: center;
    position: absolute;
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Row = styled.div`
  display: block;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  font-weight: 300;
  /* background: #c33434; */
  background: #000;
  border-top: 0.0025rem solid grey;
  padding: 0.75rem 2rem;
  border-radius: 2rem;
  margin-top: -1.5rem;
  z-index: 3;

  p {
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    padding: 0.5rem 1.3rem;
    font-weight: 300;
    font-size: 0.8rem;
    margin-top: -1rem;
  }
`;
