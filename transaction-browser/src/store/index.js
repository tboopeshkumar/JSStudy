import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import browseviewreducer from './../reducers/browseviewreducer';
import { watchForLoadTransactions,watchForFilterSymbolTransactions } from "./../sagas/browseviewsaga";
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    browseviewreducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchForFilterSymbolTransactions);
sagaMiddleware.run(watchForLoadTransactions);

//const action = type => store.dispatch({type})
export default store;