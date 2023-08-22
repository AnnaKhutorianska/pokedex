import React from "react";

import {
  DetailsCard,
  DetailsWrapper,
  Image,
  Title,
  Table,
} from "./PokemonDetails.style";

import { formatText } from "../../utils";

const PokemonDetails = ({ selectedPokemon }) => {
  console.log("selectedPokemon", selectedPokemon);
  return (
    <DetailsWrapper>
      {selectedPokemon && (
        <DetailsCard>
          <Image src={selectedPokemon.sprites.front_default} alt="pokemon" />
          <Title>
            {selectedPokemon.name} #{selectedPokemon.id}
          </Title>
          <Table>
            <thead>
              <tr>
                <td>Type</td>
                <td>Fire</td>
              </tr>
            </thead>
            <tbody>
              {selectedPokemon.stats.map((status) => (
                <tr>
                  <td>{formatText(status.stat.name)}</td>
                  <td>{status.base_stat}</td>
                </tr>
              ))}

              <tr>
                <td>Weight</td>
                <td>{selectedPokemon.weight}</td>
              </tr>
              <tr>
                <td>Total moves</td>
                <td>{selectedPokemon.moves.length}</td>
              </tr>
            </tbody>
          </Table>
        </DetailsCard>
      )}
    </DetailsWrapper>
  );
};

export default PokemonDetails;
