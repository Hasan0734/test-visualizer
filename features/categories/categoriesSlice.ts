import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface categoryState {
    categories: any[],
    isLoading: boolean
}

// Define the initial state using that type
const initialState: categoryState = {
    categories: [],
    isLoading: true
}


export const categorySlice = createSlice({
    name: 'categories',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<any>) => {
            state.categories = action.payload,
            state.isLoading = false
        },

    },
})

export const { setCategories } = categorySlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state

export default categorySlice.reducer