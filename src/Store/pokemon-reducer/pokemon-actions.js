export const setPage = val => {
  return {
    type: 'setPage',
    pageNumber: val,
  };
};

export const setPokemon = val => {
  return {
    type: 'setPokemon',
    pokemon: val,
  };
};