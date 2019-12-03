export const keepDice = keepArr => dispatch => {
  dispatch({
    type: "KEEP_DICE",
    payload: keepArr
  });
};

//When checkbox is clicked, toggle value in keep array between true and false to determine which dice will be kept through next roll
