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
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`)
      .then(res => {
        extractPokemon(res.data.results, setPokemon, setEvolution, LIMIT);
      })
      .catch(() => setError(true));
  }, []);

  const setPokemon = pokemons => {
    pokemonStore.dispatch(pokemonActions.setPokemon(pokemons))
    pokemonStore.dispatch(pokemonActions.setPage(1));
  }

  const handleStoreChanges = () => {
    setLoading(true);
    const { pokemonToDisplay } = pokemonStore.getState();
    setPokeData(pokemonToDisplay);
    setLoading(false);
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
