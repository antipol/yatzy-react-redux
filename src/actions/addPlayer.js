export const addPlayer = (nameArr, numOfPlayers) => dispatch => {
  dispatch({
    type: "ADD_PLAYER",
    payload: {
      nameArr,
      numOfPlayers
    }
  });
};
