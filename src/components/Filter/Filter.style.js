import styled from "styled-components";

export const FilterIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid black;
    border-radius: 3px;
    transition: 0.5s;
  }
`;

export const FilterIconWrapper = styled.div`
  position: relative;
  text-align: left;
`;

export const FilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #fff;
  position: absolute;
`;

export const FilterItem = styled.div`
  cursor: pointer;
  border: 1px solid black;
  padding: 5px 7px;

  &:hover {
    background-color: #dee2d6;
  }
`;
