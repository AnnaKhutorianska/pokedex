import React, { useState, useEffect } from "react";

import { getPokemonTypes } from "../../api";
import filterIcon from '../../assets/filterIcon.png'; 

import {
  FilterIcon,
  FilterItem,
  FilterList,
  FilterIconWrapper,
} from "./Filter.style";

const Filter = ({ setSelectedType, selectedType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [types, setTypes] = useState([]);

  const fetchData = async () => {
    const data = await getPokemonTypes();
    setTypes(data?.results || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <FilterIconWrapper>
        <FilterIcon
          src={filterIcon}
          alt="filter icon"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        {isOpen && (
          <FilterList>
            {types.map((type) => (
              <FilterItem
                key={type.name}
                onClick={() => {
                  setSelectedType(type.name);
                  setIsOpen(false);
                }}
              >
                {type.name}
              </FilterItem>
            ))}
          </FilterList>
        )}
      </FilterIconWrapper>
    </>
  );
};

export default Filter;
