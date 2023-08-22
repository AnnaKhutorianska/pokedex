import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";

const Api = axios.create({
  baseURL,
  headers: {
    accept: "application/json",
  },
});

export const getPokemons = async (offset = 0) => {
  const { data } = await Api.get(`pokemon?limit=12&offset=${offset}`);
  return data;
};

export const getPokemonsDetails = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export const getPokemonTypes = async () => {
  const { data } = await Api.get("type");
  return data;
};
