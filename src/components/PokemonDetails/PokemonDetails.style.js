import styled from "styled-components";

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #8d99ae;
  border-radius: 5px;
  min-width: 250px;
`;

export const DetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: 600;
  text-align: center;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const Table = styled.table`
  width: 200px;
  border: none;
  border-collapse: collapse;
  margin-bottom: 10px;
  td,
  th {
    border: 1px solid #8d99ae;
  }

  td {
    padding: 5px;
    text-align: center;
  }
`;
