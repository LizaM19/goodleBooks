import { combineReducers, createStore } from "redux";
import { resultsReducer } from "./SearchResultsAppState";


const reducers = combineReducers({ resultsReducer: resultsReducer });
const store = createStore(reducers);

export default store;