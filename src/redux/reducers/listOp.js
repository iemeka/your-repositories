const listOp = (state = [], action) => {
  switch (action.type) {
    case "PUT":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((value, index) => index !== action.payload);
    default:
      return state;
  }
};

export default listOp;
