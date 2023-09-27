import {combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {  applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartModalReducer from "./slices/CartModal";
import  counterSlice  from "./slices/CartModal copy";
import  CartItemSlice  from "./slices/CartItems";

const persistConfig ={ 
    key: "root",
     storage,
}
const reducers = combineReducers({
   cartModal: cartModalReducer,
    counter: counterSlice,
    cart: CartItemSlice
})

const persistedReducer = persistReducer(persistConfig, reducers,)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
    
})


 export const persistor = persistStore(store);
 export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;