import styled from "styled-components";
import bg from "../../assets/images/collabsx/miriam.jpg";

export const DiscoverContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: bottom;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
    padding: 0 24px;
  }
`;

export const DiscoverHeader = styled.div`
  @media screen and (max-width: 960px) {
    font-weight: 600;
  }
`;
export const Headerdivs = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
  color: white;
  display: flex;
  align-items: center;

  justify-items: center;
  align-content: center;
`;
export const HeaderDivOne = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-weight: 800;
  font-size: 1rem;
  color: white;
  background: #900d09;
  padding: 10px 26px;
  border-radius: 20px;
  margin-right: 1rem;
  cursor: pointer;
`;
export const HeaderDivTwo = styled.div``;
export const HeaderDivThree = styled.div`
  font-family: "Ubuntu", sans-serif;
  color: grey;
  margin-right: 0.5rem;

  :hover {
    color: white;
    cursor: pointer;
  }
`;
export const SliderOne = styled.div``;

export const Disbody = styled.div`
  color: white;
`;

export const CardBox1 = styled.div`
  color: white;
  height: 500px;
  border-radius: 10px;

  img {
    border-radius: 20px;
    width: 100%;
    padding-right: 0.5rem;
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #900d09;
  }

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
export const ButtonOne = styled.div``;
export const TextOne = styled.div``;

export const Tabsy = styled.div``;
export const Tabsone = styled.div``;
