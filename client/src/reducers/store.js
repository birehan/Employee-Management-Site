import { createStore, applyMiddleware } from "redux";
import { reducers } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;
