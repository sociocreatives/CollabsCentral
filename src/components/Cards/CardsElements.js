import styled from "styled-components";

export const CardContent = styled.div`
  background: linear-gradient(to top, #000 5%, transparent);
`;

export const Row = styled.div``;

export const CardImage = styled.div`
  /* width: 300px;
  height: 450px;
  background: #dc0c03;
  border-radius: 20px;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer; */
`;
export const ImageOne = styled.div`
  /* width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  border: white solid 1px; */

  /* .img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    :hover {
      transform: scale(1.1);
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }
  }

  

  :before {
    content: "";
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: 0.3s ease-out;
    background: linear-gradient(to top, #000 3%, transparent);
    border-radius: 10px;
    opacity: 1;
    position: absolute;
  } */

  /* display: flex;
  align-items: flex-end;
  align-content: center;
  justify-content: center;
  align-content: center;
  padding: 1rem;
  font-weight: 300;
  font-size: 2.25rem;
  text-align: center;
  z-index: 2;
  position: absolute;

  :hover {
    cursor: pointer;
    transform: translateX(20);
  } */
`;

export const CardContainer = styled.div`
  /* align-items: center; */
  margin-right: auto;
  margin-left: auto;
  padding: 0 0px;
  width: 100%;

  @media screen and (max-width: 960px) {
    /* align-items: center; */
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    width: 100%;
  }
`;
