import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
const axios = require('axios');

export default function PokemonList() {
  const [pokeData, setData] = useState([]);
  const [pokeName, setName] = useState([]);

  // function extractPredecessor(url, setData) {
  //   axios.get(url)
  //     .then(res => setData())
  //   .catch(err => console.log(err, "Error"))
  // }

  const extractTypes = typesArr => {
    let typesList = [];
    typesArr.forEach(typ => {
      typesList.push(typ.type.name)
    })
    return typesList;
  }

  const extractPokemon = (data, setData) => {
    data.forEach(datum => {
      axios.get(datum.url)
        .then(res => {
          setData( prev => ([ ...prev,
            {
              name: res.data.name,
              height: res.data.height,
              weight: res.data.weight,
              id: res.data.id,
              sprite: res.data.sprites.front_default,
              types: extractTypes(res.data.types),
              species: res.data.species.url
            }
          ]))
        })
    })
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`)
      .then(res => {
        extractPokemon(res.data.results, setData)
      })
      .catch(err => console.log("Err", err))
  }, [])

  // const pokemonData = pokeData.map(pokemon => {

  //   return (
  //     <Pokemon
  //       name={pokemon.name}
  //       url={pokemon.url}
  //     />
  //   )
  // })

  console.log(pokeData);

  return (
    <div>
      {/* {pokemonData} */}
    </div>
  )
}
