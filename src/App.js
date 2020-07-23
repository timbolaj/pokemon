import React, { useState } from 'react';
import logo from './logo.svg';
import './Styles/App.scss';
import PokemonList from '../src/Components/PokemonList';
import Nav from '../src/Components/Nav';
import PaginationBar from './Components/PaginationBar';

function App() {

  const [page, setPage] = useState(1);

  const togglePage = (val = false) => {
    if (!val) {
      return setPage(page + 1);
    }
    return setPage(val)
  }

  return (
    <div className="App">
      <Nav />
      <PokemonList page={page} />
      <PaginationBar togglePage={togglePage} page={page} />
    </div>
  );
}

export default App;
