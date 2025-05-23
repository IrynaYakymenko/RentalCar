import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1 } = {}, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/cars`, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
