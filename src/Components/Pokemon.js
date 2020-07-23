import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/Pokemon.scss';

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

  console.log(page)

  const assignClassName = (id, page) => {
    if (page === 1) {
      if (id <= 25) {
        return 'show';
      }
      return 'hide';
    }

    if (page === 2) {
      if (id > 25 && id <= 50) {
        return 'show';
      }
      return 'hide';
    }

    if (page === 3) {
      if (id > 50 && id <= 75) {
        return 'show';
      }

      return 'hide';
    }

    if (page === 4) {
      if (id > 75 && id <= 100) {
        return 'show'
      }
      return 'hide'
    }

    if (page === 5) {
      if (id > 100 && id <= 125) {
        return 'show'
      }
      return 'hide';
    }

    if (page === 6) {
      if (id <= 150 && id > 125) {
        return 'show';
      }
      return 'hide';
    }
  }
  return (
    <div id={id} className={assignClassName(id, page)}>
      <img src={sprite}/>
      <div>{name}</div>
    </div>
  )
}