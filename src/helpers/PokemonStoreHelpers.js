export function pokemonPageFilter(page, list) {
  const startIdx = (page - 1) * 25;
  const endIdx = page * 25;

  return list.slice(startIdx, endIdx);
}