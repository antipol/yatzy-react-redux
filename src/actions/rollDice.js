export const rollDice = () => dispatch => {
  dispatch({
    type: "ROLL_DICE",
    payload: [
      "fas fa-dice-one fa-3x",
      "fas fa-dice-two fa-3x",
      "fas fa-dice-three fa-3x",
      "fas fa-dice-four fa-3x",
      "fas fa-dice-five fa-3x",
      "fas fa-dice-six fa-3x"
    ]
  });
};
