import { assignClassName, capitalizeFirstLetter } from '../helpers/PokemonHelpers';

describe("assignClassname", () => {
  it("should return entry show when id is on the first page and the id is less than or equal to 25 and hide otherwise", () => {
    expect(assignClassName(1, 1)).toBe('entry show');
    expect(assignClassName(25, 1)).toBe('entry show');
    expect(assignClassName(26, 1)).toBe('hide');
  })

  it("should return entry show when id is on the second page and the id is less than or equal to 50 and greater than 25 and hide otherwise", () => {
    expect(assignClassName(25, 2)).toBe('hide');
    expect(assignClassName(26, 2)).toBe('entry show');
    expect(assignClassName(50, 2)).toBe('entry show');
    expect(assignClassName(51, 2)).toBe('hide');
  })

  it("should return entry show when id is on the third page and the id is less than or equal to 75 and greater than 50 and hide otherwise", () => {
    expect(assignClassName(50, 3)).toBe('hide');
    expect(assignClassName(51, 3)).toBe('entry show');
    expect(assignClassName(75, 3)).toBe('entry show');
    expect(assignClassName(76, 3)).toBe('hide');
  })

  it("should return entry show when id is on the fourth page and the id is less than or equal to 100 and greater than 75 and hide otherwise", () => {
    expect(assignClassName(75, 4)).toBe('hide');
    expect(assignClassName(76, 4)).toBe('entry show');
    expect(assignClassName(100, 4)).toBe('entry show');
    expect(assignClassName(101, 4)).toBe('hide');
  })

  it("should return entry show when id is on the fifth page and the id is less than or equal to 125 and greater than 100 and hide otherwise", () => {
    expect(assignClassName(100, 5)).toBe('hide');
    expect(assignClassName(101, 5)).toBe('entry show');
    expect(assignClassName(125, 5)).toBe('entry show');
    expect(assignClassName(126, 5)).toBe('hide');
  })

  it("should return entry show when id is on the sixth page and the id is less than or equal to 150 and greater than 125 and hide otherwise", () => {
    expect(assignClassName(125, 6)).toBe('hide');
    expect(assignClassName(126, 6)).toBe('entry show');
    expect(assignClassName(150, 6)).toBe('entry show');
  })
})

describe("capitalizeFirstLetter", () => {
  it("Should capitalize the first letter of the word passed into it", () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  })
})