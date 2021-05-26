import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        setCountDetails: (state, action) => {
            state.count = action.payload.count;
        },
    }
})

export const { setCountDetails } = countSlice.actions;

export const selectCount = state => state.count.count;

export default countSlice.reducer;