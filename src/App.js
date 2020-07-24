import React, { useState, useEffect } from 'react';
import './Styles/App.scss';
import PokemonList from '../src/Components/PokemonList';
import Nav from '../src/Components/Nav';
import PaginationBar from './Components/PaginationBar';
import Home from './Components/Home';
import Loading from './Components/Loading';

const INDEX = 'index';
const POKEDEX = 'pokedex';
const LOADING = 'loading';

function App() {

  const [page, setPage] = useState(1);
  const [mode, setMode] = useState(INDEX)

  const togglePage = (val = false) => {
    if (!val) {
      toggleMode();
      setPage(page + 1);
    }

    toggleMode();
    return setPage(val)
  }

  const toggleMode = () => {
    setMode(LOADING)
    setTimeout(() => {
      setMode(POKEDEX)
    }, 1500)
  }

  return (
    <div className="App">
      <Nav />
      {mode === LOADING && <Loading />}
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
