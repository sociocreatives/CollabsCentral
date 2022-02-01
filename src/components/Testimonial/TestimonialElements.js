import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;

  @media screen and (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px;
    width: 100%;
  }
`;
export const Avatar = styled.div`
  margin-right: 5px;
  cursor: pointer;
  transition: 0.3s ease-out;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: relative;
  align-items: flex-end;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
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
    background: linear-gradient(to top, #000 10%, transparent);
    border-radius: 10px;
    opacity: 1;
    position: absolute;
  }
`;
export const Box = styled.div`
  position: relative;
  z-index: 3;
  padding: 2rem;
  transform: translateY(250px);

  :hover {
    transform: translateY(230px);
    transition: 0.3s ease-in;
    color: white;
  }

  h2 {
    color: #fff;
    font-weight: 300;
  }

  p {
    font-weight: 300;
    color: grey;

    :hover {
      color: white;
    }
  }
`;
export const Content = styled.div`
  padding: 0.5rem;
`;
export const Review = styled.div``;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
    text-align: center;
    align-content: center;
    justify-content: center;
    margin-top: 1rem;
    padding: 2rem;
  }
`;
