const initialState = {
  diceArr: [
    "fas fa-question fa-3x",
    "fas fa-question fa-3x",
    "fas fa-question fa-3x",
    "fas fa-question fa-3x",
    "fas fa-question fa-3x"
  ],
  rollsLeft: 3
};

const getRandomNum = () => Math.floor(Math.random() * 6);

const rollDiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ROLL_DICE":
      const diceArr = [];
      for (let i = 0; i < 5; i++) {
        diceArr.push(action.payload[getRandomNum()]);
      }

      let rollsLeft = state.rollsLeft;
      rollsLeft--;

      return {
        diceArr,
        rollsLeft
      };

    case "KEEP_DICE":
      return {
        ...state,
        diceToKeep: action.payload
      };

    default:
      return state;
  }
};

export default rollDiceReducer;
