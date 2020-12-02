export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0); //tallies up the basket and sums up all the price and returns it. 

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, //previous state of basket
        basket: [...state.basket, action.item] //previous state of basket + whatever we've decided add
      };
    
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {

      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        )
      }
      
    default:
      return state;
  }
};

export default reducer;
  