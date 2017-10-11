export const FILTER_SYMBOL = 'FILTER_SYMBOL';

export function filterBySymbol(filterValue) {
  return {
    type: FILTER_SYMBOL,
    filterValue
  }
}