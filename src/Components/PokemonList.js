import React, { useEffect, useState } from 'react';
import { extractPokemon } from '../helpers/PokemonListHelpers';
import { pokemonStore } from '../Store/pokemon-reducer/pokemon-reducer';
import * as pokemonActions from '../Store/pokemon-reducer/pokemon-actions';

import PaginationBar from './PaginationBar';
import Pokemon from './Pokemon';
import ErrorPage from './Error';
import Loading from './Loading';

const axios = require('axios');
const LIMIT = 150;

export default function PokemonList() {
  const [evolutionChain, setEvolution] = useState({});
  const [page, setPage] = useState(1);
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  let initialLoad = true;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`)
      .then(res => {
        extractPokemon(res.data.results, setPokemon, setEvolution, LIMIT);
      })
      .catch(() => setError(true));
  }, []);

  const setPokemon = pokemons => {
    pokemonStore.dispatch(pokemonActions.setPokemon(pokemons))
  }

  const handleStoreChanges = () => {
    setLoading(true);
    const { pageNumber, pokemon } = pokemonStore.getState();
    if (initialLoad) {
      setPokeData(pokemon);
      initialLoad = false;
    }
    togglePage(pageNumber);
    setLoading(false);
  }

  const togglePage = (number) => {
    setPage(number);
  }

  pokemonStore.subscribe(handleStoreChanges);

  const pokemonData = pokeData?.map(pokemon => {
    return (
      <Pokemon
        key={pokemon?.id}
        id={pokemon?.id}
        name={pokemon?.name}
        height={pokemon?.height}
        weight={pokemon?.weight}
        sprite={pokemon?.sprite}
        types={pokemon?.types}
        page={page}
        evolvesTo={evolutionChain}
      />
    );
  });

  return (
    <div>
      {hasError && <ErrorPage />}
      {loading && <Loading/>}
      {!hasError &&
        <div>
          {pokemonData}
          <PaginationBar />
        </div>
      }
    </div>
  );
}
