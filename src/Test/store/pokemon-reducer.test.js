import * as actions from '../../Store/pokemon-reducer/pokemon-actions';
import { pokemonStore } from '../../Store/pokemon-reducer/pokemon-reducer';

describe('pokemonReducer', () => {
  it('should set pokemon with value passed', () => {
    pokemonStore.dispatch(actions.setPokemon([{}]));
    const result = pokemonStore.getState();
    expect(result).toEqual({
      pageNumber: 1,
      pokemon: [{}],
    });
  });

  it('should set page with value passed', () => {
    pokemonStore.dispatch(actions.setPage(10));
    const result = pokemonStore.getState();
    expect(result).toEqual({
      pageNumber: 10,
      pokemon: [{}],
    });
  });
});