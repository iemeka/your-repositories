const todoDisplay = (state = false, action) => {
  switch (action.type) {
    case "DISLAY_TODO":
      return !state;
    default:
      return state;
  }
};

export default todoDisplay;
