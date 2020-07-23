import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import PokemonList from '../src/Components/PokemonList'

function App() {

  const [page, setPage] = useState(1);

  const togglePage = () => {
    return setPage(page + 1)
  }

  return (
    <div className="App">
      <PokemonList page={page} />
      <p onClick={togglePage}>click me</p>
    </div>
  );
}

export default App;
