import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { Reducer } from "./Reducer";

const RootReducer = combineReducers({
  Reducer,
});

const store = legacy_createStore(RootReducer, applyMiddleware(thunk));

export default store;
