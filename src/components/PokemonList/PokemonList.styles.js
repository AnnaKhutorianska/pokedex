import styled from "styled-components";

export const ListContainer = styled.div`
  margin: 20px 0;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ErrorMessage = styled.div`
  font-weight: 600;
  font-size: 25px;
`;
