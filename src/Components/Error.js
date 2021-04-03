import React, { useEffect, useState } from 'react';
import '../Styles/Error.scss';
import axios from 'axios';

export default function ErrorPage() {
  const [errorImage, setImage] = useState();
  const getImage = (img, setImage) => {
    return setImage(img);
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/charizard`)
      .then(res => {
        return getImage(res.data.sprites.front_shiny, setImage);
      })
  }, []);

  return (
    <div className="error-page">
      <div className="error-text">
        <h4>We're Sorry</h4>
        <div>
          <p>It seems we've had an error. Please try again later.</p>
        </div>        
      </div>
      <div className="error-message">
        <img src={errorImage} alt="error-img"/>
      </div>
    </div>
  )
}