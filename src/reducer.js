export const initialState = {
  basket: [],
};
//interative way for addind the total amount to the basket
export const getbaskettotal = (basket) => 
basket?.reduce((amount,item) => item.price + amount,0); //this is used for to add the amout of each item and show and is exported aka rahul



const reducer = (state, action) => {
  console.log(action);
  switch (action.type) { 
    case "ADD_TO_BASKET":        //adding a basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      case "REMOVE_FROM_BASKET":     //subtracting the itme which is added a 
         const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
         let newBasket = [...state.basket];
         if( index >= 0){                                 //loop and remove from the database
             newBasket.splice(index,1);
         }else{
             console.warn(`cant remove ${action.id}`)
         }
         return{
             ...state,
             basket: newBasket
         }
         case "SET_USER":
         return{
             ...state,
             user: action.user
         }
    default:
      return state;
  }
};
export default reducer;
