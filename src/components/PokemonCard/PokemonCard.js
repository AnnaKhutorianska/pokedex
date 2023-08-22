import React from "react";

import { Card, Title, Type, TypeList, Image } from "./PokemonCard.styles";

import { stringToColor } from "../../utils";

const PokemonCard = ({ pokemon, setSelectedPokemon }) => {
  return (
    <Card onClick={() => setSelectedPokemon(pokemon)}>
      <Image src={pokemon.sprites.front_default} alt="pokemon" />
      <Title>{pokemon.name}</Title>
      <TypeList>
        {pokemon?.types.map((slot) => (
          <Type key={slot.type.name} color={stringToColor(slot.type.name)}>
            {slot.type.name}
          </Type>
        ))}
      </TypeList>
    </Card>
  );
};

export default PokemonCard;
