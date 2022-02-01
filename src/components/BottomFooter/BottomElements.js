import styled from "styled-components";

export const BottomContainer = styled.div`
  border-top: 0.0125rem solid #191c21;
  margin-bottom: 4rem;
  margin-top: 4rem;
`;

export const BottomRow = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
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
    margin-bottom: 4rem;
  }
`;
export const BottomLinks = styled.div``;
export const BottomLinksTwo = styled.div``;
export const BottomLinksThree = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-content: right;
  align-items: right;
  justify-items: flex-end;
  justify-content: right;
  width: 100%;

  h4 {
    display: table; /* keep the background color wrapped tight */
    margin-right: auto 0px; /* keep the table centered */
    text-align: center;
    justify-content: right;
    background: #a61916;
    padding: 15px 40px;
    margin-top: 1rem;
    border-radius: 40px;
    font-weight: 300;
  }
`;
export const Contents = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: top;
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
    margin-bottom: 4rem;
  }
`;
export const Linktext = styled.div`
  padding: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: grey;

  :hover {
    cursor: pointer;
    color: white;
  }
`;

export const Linktexticons = styled.div`
  padding: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  color: grey;
  margin-right: 0.25rem;

  :hover {
    cursor: pointer;
    color: white;
  }
`;

export const LinktextH1 = styled.div`
  padding: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 960px) {
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: right;

  @media screen and (max-width: 960px) {
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
`;
