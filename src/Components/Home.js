import React, { useEffect, useState } from 'react';
import '../Styles/Home.scss';
import axios from 'axios';

export default function Home(props) {

  const { toggleMode } = props;

  const [homeImage, setImage] = useState();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
      .then(res => {
        return getImage(res.data.sprites.front_shiny, setImage);
      })
  }, [])
  const getImage = (img, setImage) => {
    return setImage(img);
  }

  return (
    <div className='home'>
      <h1>Welcome to the Pokédex</h1>
      <img src={homeImage}/>
      <p>A website that hosts a collection of pokemon-related information</p>
      <div className="prompt">
        <p>Ready to start? Click the pokeball!: </p>
        <img
          src="https://github.com/PokeAPI/sprites/blob/master/sprites/items/poke-ball.png?raw=true"
          className="pokeball"
          onClick={toggleMode}
        />
      </div>
      

    </div>
  )
}