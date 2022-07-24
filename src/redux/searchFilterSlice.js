import { createSlice } from "@reduxjs/toolkit";


const searchFilterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filtered: (_, action) => {
            return action.payload;
        },
    }
});

export const searchFilterReducer = searchFilterSlice.reducer;

export const  { filtered } = searchFilterSlice.actions;