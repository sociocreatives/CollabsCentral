import styled from "styled-components";

export const FaqContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;
  max-width: 800px;
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

export const FaqHeader = styled.div`
  color: #a61916;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: "Montserrat", sans-serif;
`;

export const AccordionSection = styled.div``;

export const Wrap = styled.div`
  background: #191c21;
  padding: 1rem;
  color: white;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-radius: 5px;
  border-bottom: 0.5rem black solid;

  :hover {
    background: grey;
    transition: all 0.3s ease-out;
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  transition: ease-in-out 1s;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.5rem;
  background: #191c21;
  margin-bottom: 1rem;
`;
