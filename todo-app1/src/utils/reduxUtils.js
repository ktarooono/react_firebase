//initialState
export const initialReduxState = {
  user:'',
  price:100,
  myPages:[{label:"new"}],
  selectedMyPage:{index:0,page:{label:"test"}}
};

//ActionCreator
export function addTaxAction(price) {
  return {
    type: actionType.TAX.ADD,
    price
  };
}
export function addMyPagesAction(myPage) {
  return {
    type: actionType.MYPAGE.ADD,
    myPage
  };
}
export function selectMyPageAction(selectedMyPage) {
  return {
    type: actionType.MYPAGE.SELECT,
    selectedMyPage
  };
}
//actionTypeEnum
export const actionType ={
  TAX:{ADD:"ADD_TAX"},
  MYPAGE:{ADD:"ADD_PAGE",
    DELETE:"DELETE_PAGE",
    UPDATE:"UPDATE_PAGE" ,
    SELECT:"SELECT_PAGE"
  }
}

//reducer
export function appReducer(state,action){
  switch (action.type) {
   case actionType.TAX.ADD:
     return (
       Object.assign({}, state, {price: action.price * 1.08})
     );
   case actionType.MYPAGE.ADD:
      state.myPages.push(action.myPage);
      return(
        Object.assign({},state,{myPages: state.myPages})
      )
   case actionType.MYPAGE.SELECT:
      return(
        Object.assign({},state,{selectedMyPage:action.selectedMyPage})
      )
   default:
     return state
 }
}
