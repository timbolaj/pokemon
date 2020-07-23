import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from '../src/Components/PokemonList'

function App() {

  const [page, setPage] = useState(2);

  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;
