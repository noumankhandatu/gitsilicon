export const TYPES = {
  TOGGLE_PUT_ON_SELL: "TOGGLE_PUT_ON_SELL",
  TOGGLE_PUT_ON_RENT: "TOGGLE_PUT_ON_RENT",
  TOGGLE_PUT_ON_AUCATION: "TOGGLE_PUT_ON_AUCATION",
  TOGGLE_PUT_ON_FIX_PRICE: "TOGGLE_PUT_ON_FIX_PRICE",
};

export const initialSwitchesState = {
  toggleRent: false,
  toggleAuction: false,
  togglePutOnSale: false,
  toggleFixedPrice: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_PUT_ON_SELL:
      return {
        togglePutOnSale: !state.togglePutOnSale,
        toggleRent: false,
        toggleAuction: false,
        toggleFixedPrice: false,
      };

    case TYPES.TOGGLE_PUT_ON_AUCATION:
      return {
        ...state,
        toggleRent: false,
        toggleFixedPrice: false,
        toggleAuction: !state.toggleAuction,
      };
    case TYPES.TOGGLE_PUT_ON_RENT:
      return {
        ...state,
        toggleRent: !state.toggleRent,
        toggleAuction: false,
        toggleFixedPrice: false,
      };
    case TYPES.TOGGLE_PUT_ON_FIX_PRICE:
      return {
        ...state,
        toggleRent: false,
        toggleAuction: false,
        toggleFixedPrice: !state.toggleFixedPrice,
      };

    default:
      return state;
  }
};

export default reducer;

export const toggleSwitch = (
  name = TYPES.TOGGLE_PUT_ON_SELL,
  dispatch = () => {}
) => {
  dispatch({ type: name });
};
