export const playerNum = numOfPlayers => dispatch => {
  dispatch({
    type: "CHOOSE_PLAYER_NUM",
    payload: numOfPlayers
  });
};

// action is created when user on start screen enters how many people are gonna play
