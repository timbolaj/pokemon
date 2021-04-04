import * as actions from '../../Store/pokemon-reducer/pokemon-actions';
import { pokemonStore } from '../../Store/pokemon-reducer/pokemon-reducer';

describe('pokemonReducer', () => {
  describe('setPokemon', () => {
    it('should set pokemon with value passed', () => {
      pokemonStore.dispatch(actions.setPokemon([{}]));
      const result = pokemonStore.getState();
      expect(result).toEqual({
        pageNumber: 1,
        pokemon: [{}],
        pokemonToDisplay: [],
      });
    });
  });

  describe('setPage', () => {
    const mockPokemon = () => {
      const pokemonArray = [];
      let i = 0;
      while (i < 40) {
        pokemonArray.push({ id: i });
        i++;
      }
      return pokemonArray;
    }

    beforeEach(() => {
      pokemonStore.dispatch(actions.setPokemon(mockPokemon()));
      pokemonStore.dispatch(actions.setPage(2));
    });

    it('should set page with value passed', () => {
      const result = pokemonStore.getState();
      expect(result).toEqual({
        pageNumber: 2,
        pokemon: mockPokemon(),
        pokemonToDisplay: mockPokemon().slice(25),
      });
    });
  });
});