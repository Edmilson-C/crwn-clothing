import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import sessionStorage from "redux-persist/es/storage/session"; For session Storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer"; 

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)