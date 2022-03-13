import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from 'redux';

// REDUCER は一つのstateにつき、一つ作成するのが普通
// createStore に渡す時に、REDUCER は一つにまとめておく必要があるので、combineReducersを使用している
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});

export default allReducers;