export const addToList = (nr) => {
  return {
    type: "PUT",
    payload: nr
  };
};

export const removeFromList = (nr) => {
  return {
    type: "DELETE",
    payload: nr
  };
};


export const setContent = (nr) => {
  return {
    type: "SET_CONTENT",
    payload:nr
  }
}

export const getContent = () => {
  return {
    type: "GET_CONTENT",
  }
}

export const todoDisplay = () => {
  return {
    type: "DISLAY_TODO",
  }
}
