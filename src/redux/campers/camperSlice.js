import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper, fetchCampers } from './campersOps';
export const initialState = {
    name: "trucks",
    campers: [],
    camper : {},
    error: null,
}

export const camperSlice = createSlice({
    name: initialState.name,
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.fulfilled, (state,action) => {
                state.campers = action.payload.items;
                state.error = null;
                state.camper ={}
            })
            .addCase(fetchCampers.pending, (state) => {
                state.campers = [];
                state.error = null;
                state.camper ={};
            })
            .addCase(fetchCampers.rejected, (state,action) => {
                state.campers = [];
                state.error = action.error;
                state.camper = {};
            })
            .addCase(fetchCamper.fulfilled, (state,action) => {
                state.camper = action.payload;
                state.error = null;
                state.campers = [];
            })
            .addCase(fetchCamper.pending, (state) => {
                state.camper = {};
                state.error = null;
                state.campers = [];
            })
            .addCase(fetchCamper.rejected, (state,action) => {
                state.camper = {};
                state.error = action.error;
                state.campers = [];
            })

    }//for builder closure
}); // for extraReducers closure

export default camperSlice.reducer;