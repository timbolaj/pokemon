import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pokemon(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const { name, height, weight, sprite, types, species } = props

  return (
    <div>
      <div>{name}</div>
      <div>{height}</div>
      <div>{weight}</div>
      <img src={sprite} />
    </div>


  )
}