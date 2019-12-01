export const playerNum = numOfPlayers => dispatch => {
  dispatch({
    type: "CHOOSE_PLAYER_NUM",
    payload: numOfPlayers
  });
};
