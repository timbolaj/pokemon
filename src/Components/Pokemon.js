import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Pokemon.scss';

export default function Pokemon(props) {
  const [ancestor, setAncestor] = useState([]);
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

  return (
    <div id={id} className={assignClassName(id, page)}>
      <div className="name-sprite">
        <img src={sprite} />
        <p>{name.toUpperCase()}</p>
      </div>

      <div className="description">
        <p>{capitalizeFirstLetter(name)} is a {types[0]}-type pokemon.</p>
        <p> It has a weight of {weight/10} kilgrams and a height of {height/10} metres. </p>
        {evolvesTo[name] &&
          <p> {capitalizeFirstLetter(name)} evolves into {evolvesTo[name]}.</p>
        }
      </div>

    </div>
  )
}