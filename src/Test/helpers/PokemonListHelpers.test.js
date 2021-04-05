import { extractTypes } from '../../helpers/PokemonListHelpers';

describe('PokemonListHelpers', () => {
  describe('extractTypes', () => {
    const types = [
      {
        id: 1,
        type: {
          name: 'blah'
        },
      },
      {
        id: 2,
        type: {
          name: 'barb',
        },
      },
    ];

    it('should return an array of the type names', () => {
      const result = extractTypes(types);
      expect(result).toEqual(['blah', 'barb']);
    });
  });
});
