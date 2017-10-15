import {put,take} from "redux-saga/effects/";
export function* loadTransactions(){
    const transactions = yield loadInitialData();
    yield put({ type : 'LOAD_TRANSACTIONS', columns : transactions.columns, data : transactions.data});
}

export function* filterTransactionsSaga(filterValue){
    console.log(arguments);
    console.log("filter the data : " + filterValue);
}

export function* watchForLoadTransactions() {
     while(true) {
        yield take('LOAD_TRANSACTIONS');
        yield loadTransactions();
      }
}

export function* watchForFilterSymbolTransactions() {
    while(true) {
       yield take('FILTER_SYMBOL');
       console.log(arguments);
       yield filterTransactionsSaga();
     }
}

const columnDefs = [
    { headerName: "Symbol", field: "symbol" },
    { headerName: "Financial Type", field: "fintype" },
    { headerName: "Trade Date", field: "tradedate" },
    { headerName: "Quantity", field: "quantity", cellClass: 'yellow-color-text' },
];

const rowData = [

    { symbol: "IBM", fintype: "Buy", tradedate: "11/10/2017", quantity: 100 },
    { symbol: "VOD", fintype: "Buy", tradedate: "09/10/2017", quantity: 100 },
    { symbol: "MFT", fintype: "Sell", tradedate: "11/10/2017", quantity: 100 },
    { symbol: "INT", fintype: "Buy", tradedate: "03/10/2017", quantity: 100 },
    { symbol: "SAP", fintype: "Buy", tradedate: "07/10/2017", quantity: 100 },
    { symbol: "IBM", fintype: "Sell", tradedate: "11/10/2017", quantity: 100 },
    { symbol: "TAR", fintype: "Buy", tradedate: "02/10/2017", quantity: 100 },
    { symbol: "ALA", fintype: "Sell", tradedate: "11/10/2017", quantity: 100 },
];

function loadInitialData(){
    return { columns : columnDefs, data : rowData};
}

