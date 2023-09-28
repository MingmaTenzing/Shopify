import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { CartIem } from "../../types/cartItem-type"


interface CartIems {
    cart: CartIem[];


}

const initialState: CartIems = {
    cart: [],
}

export const CartItemSlice = createSlice( {
    name: "CartItems",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id)
            if (itemInCart) {
                itemInCart.quantity++
            }
            else {
                state.cart.push({...action.payload, quantity: 1})
            }
        },
        deletefromCart: (state,action) => {
             const index = state.cart.findIndex((state) => state.id == action.payload.id)
           state.cart.splice(index,1)
        }
    }
})

export const { addToCart,deletefromCart } = CartItemSlice.actions

export default CartItemSlice.reducer