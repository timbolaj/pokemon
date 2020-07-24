import React, { useState, useEffect } from 'react';
import './Styles/App.scss';
import PokemonList from '../src/Components/PokemonList';
import Nav from '../src/Components/Nav';
import PaginationBar from './Components/PaginationBar';
import Home from './Components/Home';

const INDEX = 'index';
const POKEDEX = 'pokedex';

function App() {

  const [page, setPage] = useState(1);
  const [mode, setMode] = useState(INDEX)

  const togglePage = (val = false) => {
    if (!val) {
      return setPage(page + 1);
    }
    return setPage(val)
  }

  const toggleMode = () => {
    if (mode === INDEX) {
      setMode(POKEDEX)
    }
  }

  return (
    <div className="App">
      <Nav />
      {mode === INDEX && <Home toggleMode={toggleMode}/>}
      {mode === POKEDEX &&
        <div>
          <PokemonList page={page} togglePage={togglePage} />
          <div className='paginate'>
            <PaginationBar togglePage={togglePage} page={page} className="paginate"/>      
          </div>
        </div>
      }
    </div>
  );
}

export default App;
