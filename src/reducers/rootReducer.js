import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import playerNumReducer from "./playerNumReducer";
import scoreboardReducer from "./scoreboardReducer";
import rollDiceReducer from "./rollDiceReducer";

export default combineReducers({
  simpleReducer,
  playerNumReducer,
  scoreboardReducer,
  rollDiceReducer
});
