import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6rem;
  margin-bottom: 4rem;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  justify-content: center;
  align-items: center;
`;
export const Row = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    justify-content: center;
  }
`;
export const RowH1 = styled.div`
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #dc0c03;
`;
export const RowTwo = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    justify-content: center;
  }
`;

export const NavigationM = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: "#DC0C03";

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    justify-content: center;
  }
`;

export const Navlinks = styled.div`
  padding: 0 2rem;
  background-color: "#DC0C03";

  :hover {
    background-color: "red";
    cursor: pointer;
  }
`;

export const RowThree = styled.div`
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #dc0c03;

  :hover {
    cursor: pointer;
    color: #fff;
  }
`;

export const Dropdown = styled.div``;
export const Wrap = styled.div``;
