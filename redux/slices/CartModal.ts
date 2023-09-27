import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// Define a type for the slice state
interface CartModalState {
  value: boolean
}

// Define the initial state using that type
const initialState: CartModalState = {
  value: false,
}

export const cartModalSlice = createSlice({
  name: 'cartModal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeCartModalState: (state) => {
      state.value = !state.value; 
    }
   
   
  },
})

export const { changeCartModalState } = cartModalSlice.actions

export default cartModalSlice.reducer