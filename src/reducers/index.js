import { combineReducers } from 'redux'
import runtime from './runtime';
import * as Cont from "../constants";

function list(state = [],action){
  switch (action.type){
    case Cont.GET_LIST:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  runtime,
  list
})
