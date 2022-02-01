import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 60px;
  width: 300px;
  transition: 2s ease-in-out all;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
`;
export const Row = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background: #191c21;
  transition: 2s ease-in-out all;
  position: relative;

  height: 3rem;
  padding: 2rem 3rem;
  border-radius: 5px;
  margin-right: auto;
  margin-left: auto;
  transform: translateX(-140px);

  /* border-bottom: grey solid 0.023rem; */
`;
