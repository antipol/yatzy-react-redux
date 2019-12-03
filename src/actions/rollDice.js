export const rollDice = () => dispatch => {
  dispatch({
    type: "ROLL_DICE",
    payload: [
      { val: 1, icon: "fas fa-dice-one fa-3x" },
      { val: 2, icon: "fas fa-dice-two fa-3x" },
      { val: 3, icon: "fas fa-dice-three fa-3x" },
      { val: 4, icon: "fas fa-dice-four fa-3x" },
      { val: 5, icon: "fas fa-dice-five fa-3x" },
      { val: 6, icon: "fas fa-dice-six fa-3x" }
    ]
  });
};

//each dice object has value (num of eyes) and classname from fontawesome to decide which icon will be shown. Decided by random num function in the rollDiceReducer
