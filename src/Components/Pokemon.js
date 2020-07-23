import React, { useEffect, useState } from 'react';
import '../Styles/Pokemon.scss';

export default function Pokemon(props) {
  const { id, name, height, weight, sprite, types, page, evolvesTo } = props

  const assignClassName = (id, page) => {
    if (page === 1) {
      if (id <= 25) {
        return 'entry show';
      }
      return 'hide';
    }

    if (page === 2) {
      if (id > 25 && id <= 50) {
        return 'entry show';
      }
      return 'hide';
    }

    if (page === 3) {
      if (id > 50 && id <= 75) {
        return 'entry show';
      }

      return 'hide';
    }

    if (page === 4) {
      if (id > 75 && id <= 100) {
        return 'entry show'
      }
      return 'hide'
    }

    if (page === 5) {
      if (id > 100 && id <= 125) {
        return 'entry show'
      }
      return 'hide';
    }

    if (page === 6) {
      if (id <= 150 && id > 125) {
        return 'entry show';
      }
      return 'hide';
    }
  }

  const capitalizeFirstLetter = word => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  }

  const link = `#${evolvesTo[name]}`

  return (
    <div id={id} className={assignClassName(id, page)}>
      <div className="name-sprite">
        <a id={name}><img src={sprite} /></a>
        <p>{name.toUpperCase()}</p>
      </div>

      <div className="description">
        <p>{capitalizeFirstLetter(name)} is a {types[0]}-type pokemon.</p>
        <p> It has a weight of {weight / 10} {weight / 10 === 1 && 'kilogram'} {weight / 10 !== 1 && 'kilograms'} and a height of {height / 10} {height/10 === 1 && 'metre'}{height/10 !== 1 && 'metres'}. </p>
        {evolvesTo[name] &&
          <p>{capitalizeFirstLetter(name)} evolves into <a href={link}>{evolvesTo[name]}</a>.</p>
        }
      </div>

    </div>
  )
}