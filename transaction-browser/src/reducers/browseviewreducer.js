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

const defaultState = {
    columns: columnDefs,
    data: rowData
}

export default function transactions(state = defaultState, action) {
    console.log(state, action);
    switch (action.type) {
        case 'FILTER_SYMBOL':
            console.log("This is FILTER_SYMBOL from Reducer : "+ action.filterValue);
            return state;
        default:
            return state;
    }
    return state;
}