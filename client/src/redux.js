import { createStore, combineReducers } from 'redux';

import productsReducer from './reducers/productsReducer'
import cartItemsReducer from './reducers/cartItemsReducer'
import receiptReducer from './reducers/receiptReducer'

const allReducers = combineReducers({ productsReducer, cartItemsReducer,receiptReducer })

let store = createStore(allReducers);

export default store