import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        data: [],
    },
    reducers: {
        createRecipe:(state, action) =>{
            state.data.push(action.payload);
        },

        readRecipe:(state, action) =>{
            state.data = action.payload
        },

        updateRecipe:(state, action) =>{
            state.data = state.data.map(recipe=>recipe.id === action.payload.id? action.payload: recipe)
        },
        deleteRecipe:(state, action) =>{
            state.data = state.data.filter(recipe=>recipe.id!== action.payload)
        },
    }
    
});

export const { createRecipe, readRecipe, updateRecipe, deleteRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;