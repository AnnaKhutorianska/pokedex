import React, { useState, useEffect } from "react";

import PokemonList from "../PokemonList";
import LoadMoreBtn from "../LoadMoreBtn";
import PokemonDetails from "../PokemonDetails";

import { Wrapper, Container } from "./Content.style";

import { getPokemons, getPokemonsDetails } from "../../api";

const Content = () => {
  const [pokemons, setPokemons] = useState([]);

  const [selectedPokemon, setSelectedPokemon] = useState();
  const [offset, setOffset] = useState(0);

  const fetchData = async () => {
    const data = await getPokemons(offset);
    const pokemonsData = await Promise.all(
      data?.results.map((pokemon) => getPokemonsDetails(pokemon.url))
    );

    setPokemons((prev) => [...prev, ...pokemonsData]);
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  return (
    <Container>
      <Wrapper>
        <PokemonList
          pokemons={pokemons}
          setPokemons={setPokemons}
          setSelectedPokemon={setSelectedPokemon}
        />
        <LoadMoreBtn setOffset={setOffset} />
      </Wrapper>
      <PokemonDetails selectedPokemon={selectedPokemon} />
    </Container>
  );
};

export default Content;
