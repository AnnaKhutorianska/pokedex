import styled from "styled-components";

export const Card = styled.div`
  height: 250px;
  border: 1px solid #8d99ae;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-color: #2b2d42;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition-duration: 0.5s;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const TypeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  gap: 10px;
`;

export const Type = styled.span`
  display: inline-block;
  padding: 5px;
  min-width: 50px;
  text-align: center;
  border: 1px solid #6c757d;
  border-radius: 5px;
  background-color: ${(props) => `${props.color}` || "#fff"};

  &:first-letter {
    text-transform: uppercase;
  }
`;
