import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import { extractPokemon } from '../helpers/PokemonListHelpers';
const axios = require('axios');

export default function PokemonList(props) {
  const [pokeData, setData] = useState([]);
  const [evolutionChain, setEvolution] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`)
      .then(res => {
        return extractPokemon(res.data.results, setData, setEvolution);
      })
      .catch(err => console.log("Err", err));
  }, [])

  const pokemonData = pokeData.map(pokemon => {

    return (
      <Pokemon
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        height={pokemon.height}
        weight={pokemon.weight}
        sprite={pokemon.sprite}
        types={pokemon.types}
        page={props.page}
        evolvesTo={evolutionChain}
      />
    )
  })

  return (
    <div>
      {pokemonData}
    </div>
  )
}
