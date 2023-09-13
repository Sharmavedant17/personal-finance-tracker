import { combineReducers, createStore } from "redux";
import { financeReducer } from "../reducers/finances"

const reducer = combineReducers({
    expenses: financeReducer, 
});
const initialState = {};
const store = createStore(reducer, initialState);
export default store;