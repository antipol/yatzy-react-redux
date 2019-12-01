export const showRules = () => dispatch => {
  dispatch({
    type: "SHOW_RULES",
    payload: false
  });
};
