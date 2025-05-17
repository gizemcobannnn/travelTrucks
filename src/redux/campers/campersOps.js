import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async({ location, vehicleType, vehicleEquipment},thunkAPI ) => {
    try {
     const params = new URLSearchParams();
        if (location) params.append("location", location);
        if (vehicleType) params.append("form", vehicleType);
        if (vehicleEquipment) {
        if (vehicleEquipment === "AC") params.append("AC", true);
        if (vehicleEquipment === "Kitchen") params.append("kitchen", true);
        if (vehicleEquipment === "TV") params.append("TV", true);
        if (vehicleEquipment === "Bathroom") params.append("bathroom", true);
        if (vehicleEquipment === "Automatic") params.append("transmission", "automatic");
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