import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async({ location, vehicleType, vehicleEquipment},thunkAPI ) => {
    try {
     const params = new URLSearchParams();
        if (location) params.append("location", location);
        if (vehicleType) params.append("form", vehicleType);
        if (vehicleEquipment) {
        if (vehicleEquipment.includes("AC")) params.append("AC", true);
        if (vehicleEquipment.includes("kitchen")) params.append("kitchen", true);
        if (vehicleEquipment.includes("TV")) params.append("TV", true);
        if (vehicleEquipment.includes("bathroom")) params.append("bathroom", true);
        if (vehicleEquipment.includes("automatic")) params.append("transmission", "automatic");
    }

        const response = await axios.get(`${API_URL}?${params.toString()}`);
        return response.data;
    }catch(e){
        thunkAPI.rejectWithValue(e.message);
    }
});


export const fetchCamper = createAsyncThunk('campers/fetchCamper', async(id,thunkAPI) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; 
    }catch(e){
        thunkAPI.rejectWithValue(e.message);
    }
})