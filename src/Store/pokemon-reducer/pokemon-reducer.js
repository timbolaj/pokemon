import { createStore } from 'redux';
import { pokemonPageFilter } from '../../helpers/PokemonStoreHelpers';

const initialState = {
  pageNumber: 1,
  pokemon: [],
  pokemonToDisplay: [],
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case 'setPokemon':
      state.pokemon = [...state.pokemon, ...action.pokemon];
      return state;
    case 'setPage':
      state.pageNumber = action.pageNumber;
      state.pokemonToDisplay = pokemonPageFilter(state.pageNumber, state.pokemon)
      return state;
    default:
      return state;
  };
};

export const pokemonStore = createStore(pokemonReducer);
