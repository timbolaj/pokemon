import { createStore } from 'redux';

const initialState = {
  pageNumber: 1,
  pokemon: [],
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case 'setPokemon':
      state.pokemon = [...state.pokemon, ...action.pokemon];
      return state;
    case 'setPage':
      state.pageNumber = action.pageNumber;
      return state;
    default:
      return state;
  };
};

export const pokemonStore = createStore(pokemonReducer);
