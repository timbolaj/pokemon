import { extractTypes, getEvolution, extractPokemon } from '../helpers/PokemonListHelpers';

describe("extractTypes", () => {
  it("Given an array of objects, should return the value of the type property", () => {
    const types = [{ type: { name: "squiggly" } }, { type: { name: "who knows" } }];
    const result = extractTypes(types);
    expect(result[0]).toBe('squiggly');
    expect(result[1]).toBe('who knows');
  })
})