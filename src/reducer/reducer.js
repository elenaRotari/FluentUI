export const ACTION = {
  LOAD: "load",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.LOAD:
      return action.payload;

    default:
      break;
  }
};
