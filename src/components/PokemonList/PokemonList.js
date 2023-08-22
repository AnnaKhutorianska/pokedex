import React, { useEffect, useState } from "react";

import Filter from "../Filter";
import PokemonCard from "../PokemonCard";

import { ListContainer, ListWrapper, ErrorMessage } from "./PokemonList.styles";

const PokemonList = ({
  pokemons,
  setPokemons,
  setSelectedPokemon,
}) => {
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) => {
      return pokemon.types.some((type) => type.type.name === selectedType);
    });

    setPokemons(filtered);
  }, [selectedType]);

  return (
    <>
      <Filter setSelectedType={setSelectedType} selectedType={selectedType} />
      <ListContainer>
        {pokemons.length ? (
          <ListWrapper>
            {pokemons.map((pokemon, index) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                setSelectedPokemon={setSelectedPokemon}
              />
            ))}
          </ListWrapper>
        ) : (
          <ErrorMessage>{`There are no pokemons with ${selectedType} type`}</ErrorMessage>
        )}
      </ListContainer>
    </>
  );
};

export default PokemonList;
