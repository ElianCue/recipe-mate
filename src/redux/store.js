
import { configureStore } from "@reduxjs/toolkit";

import recipeReducer from './productSlice'

const store = configureStore({
    reducer:{
        recipe: recipeReducer,
    }
})

export default store