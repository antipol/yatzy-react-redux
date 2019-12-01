const simpleReducer = (state = {}, action) => {
  switch (action.type) {
    case "SHOW_RULES":
      return {
        ...state,
        result: !action.payload
      };
    default:
      return state;
  }
};

export default simpleReducer;
