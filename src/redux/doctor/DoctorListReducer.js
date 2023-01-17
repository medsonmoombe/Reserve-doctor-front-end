import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDoctors = createAsyncThunk('fetchDoctors', async () => {
  const response = await axios.get('https://doctor-re.onrender.com/api/v1/doctors/');
  const doctors = await response.data;
  return doctors;
});

export const doctorSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctor: '',
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchDoctors.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        doctor: action.payload,
      };
      return newState;
    },
  },
});

const doctorReducer = doctorSlice.reducer;
export default doctorReducer;
