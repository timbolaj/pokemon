import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pokemon(props) {
  const [ancestor, setAncestor] = useState([]);
  const { name, height, weight, sprite, types, species } = props

  useEffect(() => {
    axios.get(species)
      .then(res => setAncestor(res.data.evolves_from_species.name))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div>{name}</div>
      <div>{height}</div>
      <div>{weight}</div>
      <img src={sprite} />
      {ancestor && <p>{ancestor}</p>}
    </div>


  )
}