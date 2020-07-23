import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
const axios = require('axios');

export default function PokemonList(props) {
  const [pokeData, setData] = useState([]);
  const [evolutionChain, setEvolution] = useState({});

  const extractTypes = typesArr => {
    let typesList = [];
    typesArr.forEach(typ => {
      typesList.push(typ.type.name)
    })
    return typesList;
  }

  const getEvolution = url => {
    return axios.get(url)
      .then(res => {
        if (res.data.evolves_from_species) {
          const parent = res.data.name;
          const child = res.data.evolves_from_species.name;

          setEvolution((prev) => ({ ...prev, [child]: parent }))
        }
      })
  }

  const extractPokemon = (data, setData) => {
    data.forEach(datum => {
      return axios.get(datum.url)
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
          getEvolution(res.data.species.url)
        })
    })
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`)
      .then(res => {
        return extractPokemon(res.data.results, setData)
      })
      .catch(err => console.log("Err", err))
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
