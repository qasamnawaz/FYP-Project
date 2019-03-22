const cartItemsReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD":
    //  return [...state,action.payload];   
     state= action.payload;   
    return state
     case 'DEL':
  state=state.filter(item=>{
    return item !== action.payload;
  });
    return state;
    // case "QUAN":
    // console.log(action.payload);
    
    // return state;
    case "CLEAR":
    return state=[];
      default:
        return state
  
    }
  }
  
  export default cartItemsReducer
  
  