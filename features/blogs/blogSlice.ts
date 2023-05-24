import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface blogState {
    blogs: any,
    isLoading: boolean
}

// Define the initial state using that type
const initialState: blogState = {
    blogs: [],
    isLoading: true
}


export const blogSlice = createSlice({
    name: 'blogs',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setBlogs: (state, action: PayloadAction<any>) => {
            state.blogs = action.payload,
            state.isLoading = false
        },

    },
})

export const { setBlogs } = blogSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state

export default blogSlice.reducer