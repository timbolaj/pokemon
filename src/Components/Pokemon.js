import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Pokemon.scss';

export default function Pokemon(props) {
  const [ancestor, setAncestor] = useState([]);
  const { id, name, height, weight, sprite, types, species, page, setPokemon, pokemonClicked, evolvesTo } = props

  useEffect(() => {
    axios.get(species)
      .then(res => {
        setAncestor(res.data.evolves_from_species.name)
      })
      .catch(err => console.log(err))
  }, [])

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

  const capitalizeFirstLetter = word => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  }

  return (
    <div id={id} className={assignClassName(id, page)} onClick={() => setPokemon(id)}>
      <div className="name-sprite">
        <img src={sprite} />
        <p>{name.toUpperCase()}</p>
      </div>

      {pokemonClicked === id &&
        <div className="description">
          <p>{capitalizeFirstLetter(name)} is a {types[0]}-type pokemon. &nbsp;</p>
          <p>It has a weight of {weight} and a height of {height}.</p>
          <p>{capitalizeFirstLetter(name)} evolves into {evolvesTo}.</p>
        </div>
      }
    </div>
  )
}