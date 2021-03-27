import React, { useState} from 'react';
import './Styles/App.scss';
import PokemonList from '../src/Components/PokemonList';
import Nav from '../src/Components/Nav';
import PaginationBar from './Components/PaginationBar';
import Home from './Components/Home';
import Loading from './Components/Loading';
import { webPageStore } from './Store/web-page/web-page-reducer'

const INDEX = 'index';
const POKEDEX = 'pokedex';
const LOADING = 'loading';

function App() {
  const [mode, setMode] = useState();

  const toggleMode = () => {
    const state = webPageStore.getState();
    setMode(state.mode);
  }

  if (!mode) {
    toggleMode();
  }

  webPageStore.subscribe(toggleMode);

  return (
    <div className="App">
      <Nav/>
      {mode === LOADING && <Loading/>}
      {mode === INDEX && <Home/>}
      {mode === POKEDEX &&
        <div>
          <PokemonList/>
          <div className='paginate'>
            <PaginationBar className="paginate"/>      
          </div>
        </div>
      }
    </div>
  );
}

export default App;
