import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from '../src/Components/PokemonList'

function App() {

  const [page, setPage] = useState(1);

  const togglePage = () => {
    return setPage(page + 1)
  }

  return (
    <div className="App">
      <p onClick={togglePage}>click me</p>
      <PokemonList page={page} />
    </div>
  );
}

export default App;
