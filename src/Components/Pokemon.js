import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function Pokemon(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const { name, url } = props
  
  useEffect(() => {
    Axios.get(url)
      .then(res => console.log(res))
      .catch(err => console.log("Err", err))
  }, [])

  return (
    <div>{name}</div>
  )
}