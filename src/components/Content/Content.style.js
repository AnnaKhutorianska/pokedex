import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 2;
`;

export const Container = styled.div`
  display: flex;
  margin: 10px auto;
  max-width: 1170px;
  padding: 0 15px;

  @media screen and (max-width: 570px) {
   flex-direction: column-reverse;
  }
`;
