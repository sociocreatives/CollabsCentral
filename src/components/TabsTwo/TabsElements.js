import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  margin-top: 6rem;
  margin-bottom: 2rem;
  /* display: flex; */

  @media screen and (max-width: 960px) {
    /* align-items: center; */
    margin-right: auto;
    margin-left: auto;
    padding: 0 30px;
    width: 100%;
    margin-top: 3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 1rem;

  h2 {
    color: #fff;
    font-size: 2rem;
    padding-right: 1rem;
    border-right: 1px solid #fff;
  }
  h3 {
    color: grey;
    font-size: 2rem;
    padding-left: 1rem;
    font-weight: 300;

    :hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    h2 {
      color: #fff;
      font-size: 2rem;
      border-right: none;
      padding: 1rem;
    }
    h3 {
      color: grey;
      font-size: 1.5rem;
      font-weight: 300;
      padding: 1rem;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const Kwatabs = styled.div`
  /* width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px; */
  /* display: flex; */

  @media screen and (max-width: 960px) {
    /* align-items: center; */
    display: none;
  }
`;
