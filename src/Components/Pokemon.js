import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pokemon(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const { name, url } = props

  const extractAbilities = abilityObj => {
    let abilityList = [];
    abilityObj.abilities.forEach(ability => {
      abilityList.push(ability.name)
    })

    return abilityList;
  }

  const extractSpecies = speciesObj => {

  }

  // const extractInfo = data => {
  //   return {
  //     id: data.id,
  //     abilities: extractAbilities(data.abilities),
  //     height: data.height,
  //     moves: data.moves.length,
  //     sprites: data.front_default,
  //     types: extractTypes(data.types),
  //     evolves_to: extractSpecies(data.species),
  //   }
  // }
  
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setPokemonData(res.data)
      })
      .catch(err => console.log("Err", err))
  }, [])

  console.log(pokemonData);

  return (
    <div>{name}</div>
  )
}