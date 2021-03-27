import { createStore } from 'redux';

const initialState = {
  mode: 'index',
};

function webPageReducer(state = initialState, action) {
  switch (action.type) {
    case 'index':
      state.mode = 'index';
      return state;
    case 'pokedex':
      state.mode = 'pokedex';
      return state;
    case 'loading':
      state.mode = 'loading';
      return state;
    default:
      return state;
  };
};

export const webPageStore = createStore(webPageReducer);