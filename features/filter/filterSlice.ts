import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface filterState {
    category: any,
    subcategory: any,
    isLoading: boolean
}

// Define the initial state using that type
const initialState: filterState = {
    category: null,
    subcategory:[],
    isLoading: true
}


export const filterSlice = createSlice({
    name: 'filterData',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setFilterCategory: (state, action: PayloadAction<any>) => {
            state.subcategory =  action.payload,
            state.isLoading = false
        },

    },
})

export const { setFilterCategory } = filterSlice.actions


export default filterSlice.reducer