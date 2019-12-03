import { combineReducers } from "redux";
import playerNumReducer from "./playerNumReducer";
import scoreboardReducer from "./scoreboardReducer";
import rollDiceReducer from "./rollDiceReducer";

export default combineReducers({
  playerNumReducer,
  scoreboardReducer,
  rollDiceReducer
});
