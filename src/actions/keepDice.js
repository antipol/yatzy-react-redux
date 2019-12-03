export const keepDice = diceToKeep => dispatch => {
  dispatch({
    type: "KEEP_DICE",
    payload: diceToKeep
  });
};
