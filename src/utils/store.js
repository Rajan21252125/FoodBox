import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import dataSlice from "./dataSlice"

const store = configureStore({
    reducer: {
        cart: cartSlice,
        restroData: dataSlice, 
    },
})

export default store

