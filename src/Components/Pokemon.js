import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pokemon(props) {
  const [ancestor, setAncestor] = useState([]);
  const { id, name, height, weight, sprite, types, species, page } = props

  useEffect(() => {
    axios.get(species)
      .then(res => {
        setAncestor(res.data.evolves_from_species.name)
      })
      .catch(err => console.log(err))
  }, [])

  const assignClassName = id => {
    if (id <= 50) {
      return 'first-page';
    }

    if (id > 50 && id <= 100) {
      return 'second-page';
    }

    if (id > 100 && id <= 150) {
      return 'third-page';
    }
  }
  return (
    <div id={id} className={assignClassName(id)}>
      <div>{name}</div>
      <div>{height}</div>
      <div>{weight}</div>
      <img src={sprite} />
    </div>
  )
}