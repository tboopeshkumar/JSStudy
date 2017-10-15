const defaultState = {
    columns: [],
    data: []
}

export default function transactions(state = defaultState, action) {
    console.log(state, action);
    switch (action.type) {
        case 'FILTER_SYMBOL':
            console.log("This is FILTER_SYMBOL from Reducer : "+ action.filterValue);
            return {...state, data:action.data};
        case 'LOAD_TRANSACTIONS':
            return{ ...state, columns :action.columns, data : action.data}
        default:
            return state;
    }
   
}