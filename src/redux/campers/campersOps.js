import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async() => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    }catch(e){
        console.error('Error fetching campers:',e);
        throw new Error('Failed to fetch campers');
    }
});

export const fetchCamper = createAsyncThunk('campers/fetchCamper', async(id) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; 
    }catch(e){
        console.error("Error fetching camper:",e);
        throw new Error('Failed to fetch camper');
    }
})