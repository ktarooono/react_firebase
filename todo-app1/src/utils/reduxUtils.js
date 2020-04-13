
//ActionCreator
export function addTaxAction(price) {
  return {
    type: actionType.TAX.ADD,
    price
  };
}
export function addMyPagesAction(myPage) {
  return {
    type: actionType.PAGE.ADD,
    myPage
  };
}

//actionTypeEnum
export const actionType ={
  TAX:{ADD:"ADD_TAX"},
  PAGE:{ADD:"ADD_PAGE",
    DELETE:"DELETE_PAGE",
    UPDATE:"UPDATE_PAGE" 
  }
}

//reducer
export function appReducer(state,action){
  switch (action.type) {
   case actionType.TAX.ADD:
     return (
       Object.assign({}, state, {price: action.price * 1.08})
     );
   case actionType.PAGE.ADD:
      state.myPages.push(action.myPage);
      return(
        Object.assign({},state,{myPages: state.myPages})
      )

   default:
     return state
 }
}
