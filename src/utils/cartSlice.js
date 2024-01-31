import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        prices: [],
    },
    reducers: {
        addToCart: (state,action) => {
            state.items.push(action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
        removeFromCart:(state, action)=>{
            state.items.pop(action.payload)
        },
        addPrices : (state,action) => {
            state.prices.push(action.payload)
        }
    }
})



export const {addToCart , clearCart , removeFromCart , addPrices } = cartSlice.actions

export default cartSlice.reducer