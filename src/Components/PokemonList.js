import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import { extractPokemon } from '../helpers/PokemonListHelpers';
import { pokemonStore } from '../Store/pokemon-reducer/pokemon-reducer';
import * as pokemonActions from '../Store/pokemon-reducer/pokemon-actions';
import PaginationBar from './PaginationBar';
import ErrorPage from './Error';

const axios = require('axios');
const LIMIT = 150;

export default function PokemonList() {
  const [evolutionChain, setEvolution] = useState({});
  const [pokeData, setPokeData] = useState([]);
  const hasError = false;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`)
      .then(res => {
        return extractPokemon(res.data.results, setPokemon, setEvolution, LIMIT);
      })
      .catch(() => hasError = true);
  }, []);

  const setPokemon = pokemons => {
    pokemonStore.dispatch(pokemonActions.setPokemon(pokemons))
    pokemonStore.dispatch(pokemonActions.setPage(1));
  }

  const handleStoreChanges = () => {
    const { pokemonToDisplay } = pokemonStore.getState();
    setPokeData(pokemonToDisplay);
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
      {!hasError &&
        <div>
          {pokemonData}
          <PaginationBar />
        </div>
      }
    </div>
  );
}
