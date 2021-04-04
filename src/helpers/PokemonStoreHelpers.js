export function pokemonPageFilter(page, list, quantityPerPage) {
  const startIdx = (page - 1) * quantityPerPage;
  const endIdx = page * quantityPerPage;

  return list.slice(startIdx, endIdx);
}