import { pokemonPageFilter } from '../../helpers/PokemonStoreHelpers';

describe('pokemonStoreHelpers', () => {
  describe('pokemonPageFilter', () => {
    it('should return a portion of the list according to the quantityPerPage and size of the list', () => {
      const mockList = () => {
        const list = [];
        let i = 0;
        while (i < 10) {
          list.push({ id: i });
          i++;
        }
        return list;
      }

      const result = pokemonPageFilter(2, mockList(), 5);
      expect(result).toEqual(mockList().slice(5));
    });
  });
});