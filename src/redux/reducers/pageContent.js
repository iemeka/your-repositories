const pageContent = (state = null, action) => {
  switch (action.type) {
    case "GET_CONTENT":
      return state;
    case "SET_CONTENT":
      return action.payload
    default:
      return state;
  }
};

export default pageContent;
