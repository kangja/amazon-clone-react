export const initialState = {
  basekt: [],
};

const reducer = (state, action) => {

  switch (action.type) {
    case "ADD_TO_BASEKET":
      return {
        ...state, //previous state of basket
        basket: [...state.basket, action.item] //previous state of basket + whatever we've decided add
      };
    
    default:
      return state;
  }
};

export default reducer;
  