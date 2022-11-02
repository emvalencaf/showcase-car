// Modules
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import carService from '../services/car.service';

const initialState = {
    cars: [],
    car: {},
    error: false,
    succes: false,
    loading: false,
    message: null
};


// Functions
    // Publish a car
export const publishCar = createAsyncThunk(
    'car/publish',
    async (car, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token;

        const data = await carService.publishCar(car, token);

        // Check for errors
        if(data.errors) return thunkAPI.rejectWithValue(data.errors[0]);

        return data;

    }
);

    // Get a car details by id
export const getCarById = createAsyncThunk(
    "car/car",
    async (id, thunkAPI) => {

        const data = await carService.getCarById(id);

        // Check for errors
        if(data.errors) return thunkAPI.rejectWithValue(data.errors[0]);

        return data;
    }
);

    // Get all cars details
export const getAllCars = createAsyncThunk(
    "car/cars",
    async (cars, thunkAPI) => {

        const data = await carService.getAllCars();

        // Check for errors
        if(data.errors) return thunkAPI.rejectWithValue(data.errors[0]);

        return data;

    }
);







// SLICE
export const carSlice = createSlice({
    name: "car",
    initialState,
    reducers:{
        resetMessage: (state) => {state.message = null}
    },
    extraReducers: (builder) => {
        builder
            .addCase(publishCar)
                .addCase(publishCar.pending, (state) => {
                    state.loading = true;
                    state.error = false;
                })
                .addCase(publishCar.fulfilled, (state, action) => {
                    state.loading = false;
                    state.success = true;
                    state.error = null;
                    state.car = action.payload;
                    state.cars.push(state.car);
                    state.message = "Carro posto à venda com sucesso!"
                })
                .addCase(publishCar.rejected, (state, action) =>{
                    state.loading = false;
                    state.error = action.payload;
                    state.car = {};
                })
                .addCase(getAllCars.pending, (state) => {
                    state.loading = true;
                    state.error = false;
                })
                .addCase(getAllCars.fulfilled, (state, action) => {
                    state.loading = false;
                    state.success = true;
                    state.error = null;
                    state.cars = action.payload;
                })
                .addCase(getAllCars.rejected, (state, action) =>{
                    state.loading = false;
                    state.error = action.payload;
                    state.cars = {};
                })
                .addCase(getCarById.pending, (state) => {
                    state.loading = true;
                    state.error = false;
                })
                .addCase(getCarById.fulfilled, (state, action) => {
                    state.loading = false;
                    state.success = true;
                    state.error = null;
                    state.car = action.payload;
                })
    }

});

export default carSlice.reducer;