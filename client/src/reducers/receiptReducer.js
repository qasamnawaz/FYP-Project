const receiptReducer = (state = [], action) => {
    switch (action.type) {
      case "RECEIPT":
     state= action.payload;   
    return state
      default:
        return state
  
    }
  }
  
  export default receiptReducer;
  
  