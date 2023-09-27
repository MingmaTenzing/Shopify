import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// Define a type for the slice state
interface counter {
  value: number
}

// Define the initial state using that type
const initialState: counter = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value +=1; 
    }
   
   
  },
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer