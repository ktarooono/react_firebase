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
  return async (dispatch,getState,{getFirebase,getFirestore}) => {
    const firestore = getFirestore();
    const storeRef = await firestore.collection('pages').doc('ono_ke');
    const data = await storeRef.get()
    const pageList = await data.data().pages;
    pageList.push(myPage);
    storeRef.set({
      pages:pageList
    }).then(() => {
        dispatch( {type: actionType.MYPAGE.ADD,
          myPage
        })
    }).catch((err) => {
      dispatch({type:'CREATE_PROJECT_ERROR',err})
    })
  }
  return
}
export function initMyPagesAction(myPages) {
  return {
    type: actionType.MYPAGE.INIT,
    myPages
  };
}

// export function selectMyPageAction(selectedMyPage) {
//   return {
//     type: actionType.MYPAGE.SELECT,
//     selectedMyPage
//   };
// }
export function selectMyPageAction(selectedMyPage) {
  return (dispatch,getState,{getFirebase,getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('pages').doc('redux').set({
      pages:selectedMyPage
    }).then(() => {
        dispatch({type: actionType.MYPAGE.SELECT,
        selectedMyPage})
    }).catch((err) => {
      dispatch({type:'CREATE_PROJECT_ERROR',err})
    })
  }
}


//actionTypeEnum
export const actionType ={
  TAX:{ADD:"ADD_TAX"},
  MYPAGE:{ADD:"ADD_PAGE",
    DELETE:"DELETE_PAGE",
    UPDATE:"UPDATE_PAGE" ,
    SELECT:"SELECT_PAGE",
    INIT:"INIT_PAGE"
  }
}

//reducer
export function appReducer(state,action){
  switch (action.type) {
   case actionType.TAX.ADD:
     return (
       Object.assign({}, state, {price: action.price * 1.08})
     );
  case actionType.MYPAGE.INIT:
      return (
        Object.assign({},state,{myPages: action.myPages})
      )
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
