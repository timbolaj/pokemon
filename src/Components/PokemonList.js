import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
const axios = require('axios');

export default function PokemonList() {
  const [pokeData, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`)
      .then(res => setData(res.data.results))
      .catch(err => console.log("Err", err))
  }, [])

  const pokemonData = pokeData.map(pokemon => {

    return (
      <Pokemon
        name={pokemon.name}
        url={pokemon.url}
      />
    )
  })

  return (
    <div>
      {pokemonData}
    </div>
  )
}
