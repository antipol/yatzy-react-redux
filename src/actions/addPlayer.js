export const addPlayer = (nameArr, numOfPlayers) => dispatch => {
  dispatch({
    type: "ADD_PLAYER",
    payload: {
      nameArr,
      numOfPlayers
    }
  });
};

//action created when user has entered names for all players and clicked next
