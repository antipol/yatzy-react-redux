import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import playerNumReducer from "./playerNumReducer";
import scoreboardReducer from "./scoreboardReducer";

export default combineReducers({
  simpleReducer,
  playerNumReducer,
  scoreboardReducer
});
