export const FILTER_SYMBOL = 'FILTER_SYMBOL';
export const LOAD_TRANSACTIONS ='LOAD_TRANSACTIONS';
export function filterBySymbol(filterValue) {
  return {
    type: FILTER_SYMBOL,
    filterValue
  }
}

export function loadTransactions(){
  return{
    type : LOAD_TRANSACTIONS
  }
}