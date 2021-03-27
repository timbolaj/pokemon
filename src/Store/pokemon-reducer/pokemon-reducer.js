import { createStore } from 'redux';

const initialState = {
  pageNumber: 1,
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case 'setPage':
      state.pageNumber = action.pageNumber;
      return state;
    default:
      return state;
  };
};

export const pokemonStore = createStore(pokemonReducer);
