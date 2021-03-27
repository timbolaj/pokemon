import React from 'react';
import { assignClassName, capitalizeFirstLetter } from '../helpers/PokemonHelpers'
import '../Styles/Pokemon.scss';

export default function Pokemon(props) {
  const { id, name, height, weight, sprite, types, page, evolvesTo } = props
  const link = `#${evolvesTo[name]}`

  return (
    <div id={id} className={assignClassName(id, page)}>
      <div className="name-sprite">
        <a id={name}><img src={sprite} alt="sprite-img" /></a>
        <p>{name?.toUpperCase()}</p>
      </div>

      <div className="description">
        <p>{capitalizeFirstLetter(name)} is {'aeiou'.includes(types[0][0]) && 'an'} {!'aeiou'.includes(types[0][0]) && 'a'} {types[0]}-type pokemon</p>
        <p> It has a weight of {weight / 10} {weight / 10 === 1 && 'kilogram'} {weight / 10 !== 1 && 'kilograms'} and a height of {height / 10} {height/10 === 1 && 'metre'}{height/10 !== 1 && 'metres'}</p>
        {evolvesTo[name] &&
          <p>{capitalizeFirstLetter(name)} evolves into <a href={link}>{evolvesTo[name]}</a></p>
        }
      </div>

    </div>
  )
}