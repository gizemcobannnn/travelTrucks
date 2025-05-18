import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper, fetchCampers } from './campersOps';
export const initialState = {
    name: "trucks",
    campers: [],
    camper : {},
    error: null,
    favorites: [],
    loading:false,
    filters: {
        location: '',
        vehicleType: [],
        vehicleEquipment: []
  },
}

export const camperSlice = createSlice({
    name: initialState.name,
    initialState,
    reducers:{
        setFilters:(state,action)=>{
            state.filters=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.fulfilled, (state,action) => {
                state.campers = action.payload?.items || [] ;
                state.error = null;
                state.camper ={};
                state.loading=false;
            })
            .addCase(fetchCampers.pending, (state) => {
                state.campers = [];
                state.error = null;
                state.camper ={};
                state.loading=true;
            })
            .addCase(fetchCampers.rejected, (state,action) => {
                state.campers = [];
                state.error = action.error;
                state.camper = {};
                state.loading=false;
            })
            .addCase(fetchCamper.fulfilled, (state,action) => {
                state.camper = action.payload || {};
                state.error = null;
                state.campers = [];
                state.loading=false;
            })
            .addCase(fetchCamper.pending, (state) => {
                state.camper = {};
                state.error = null;
                state.campers = [];
                state.loading=true;
            })
            .addCase(fetchCamper.rejected, (state,action) => {
                state.camper = {};
                state.error = action.error;
                state.campers = [];
                state.loading=false;
            })

    }//for builder closure
}); // for extraReducers closure

export const {setFilters} = camperSlice.actions;
export default camperSlice.reducer;