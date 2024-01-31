import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        items: []
    },
    reducers: {
        setRestroData: (state,action) => {
            state.items = action.payload;
        }
    }
})




export const {setRestroData} = dataSlice.actions;
export default dataSlice.reducer;