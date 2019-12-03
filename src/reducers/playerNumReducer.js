const initialState = {
  numOfPlayers: 2
};

const playerNumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_PLAYER_NUM":
      //will check whether to also return ...state
      return {
        numOfPlayers: parseInt(action.payload)
      };

    default:
      return state;
  }
};

export default playerNumReducer;
