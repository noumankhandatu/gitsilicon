export const initialState = {
  activeTheme: "dark",
};
export const TOGGLE_STATE = "TOGGLE_STATE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STATE:
      return {
        activeTheme: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
