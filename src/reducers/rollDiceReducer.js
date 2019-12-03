//initially 5 question marks are shown (before players first roll)
//3 rolls per round
//initially no dice to be kept (before user clicks the checkboxes)
const initialState = {
  diceArr: [
    "fas fa-question fa-3x",
    "fas fa-question fa-3x",
    "fas fa-question fa-3x",
    "fas fa-question fa-3x",
    "fas fa-question fa-3x"
  ],
  rollsLeft: 3,
  keepArr: [false, false, false, false, false]
};

//generate num between 0 and 5 (dice 1 - 6)
const getRandomNum = () => Math.floor(Math.random() * 6);

const rollDiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ROLL_DICE":
      //initiate empty array to hold icon class names
      let diceArr = [];

      for (let i = 0; i < 5; i++) {
        //fill array with 5 random dice
        diceArr.push(action.payload[getRandomNum()].icon);

        //if any of the checkboxes have been ticked, keep that dice in the dice array
        if (state.keepArr[i]) diceArr[i] = state.diceArr[i];
      }

      //decrement rollsLeft for each roll
      let rollsLeft = state.rollsLeft;
      rollsLeft--;

      return {
        ...state,
        diceArr,
        rollsLeft
      };

    case "KEEP_DICE":
      //update the array in the state with current boolean array
      state.keepArr = action.payload;

      return {
        ...state
      };

    default:
      return state;
  }
};

export default rollDiceReducer;
