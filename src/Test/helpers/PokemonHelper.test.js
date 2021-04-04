import { capitalizeFirstLetter } from '../../helpers/PokemonHelpers';

describe("capitalizeFirstLetter", () => {
  it("Should capitalize the first letter of the word passed into it", () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });
});