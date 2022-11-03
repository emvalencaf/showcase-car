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
    async (dataCar, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token;

        const data = await carService.publishCar(dataCar, token);

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

    // Update a car
export const updateCar = createAsyncThunk(
    'car/update',
    async (data, id, thunkAPI) => {


        const token = thunkAPI.getState().auth.user.token;

        const newData = await carService(data, id, token)
        
        // Check for errors
        if(newData.errors) return thunkAPI.rejectWithValue(newData.errors[0]);

        return newData;
    }
);

    // Delete a car
export const deleteCar = createAsyncThunk(
    'car/delete',
    async(id, thunkAPI) =>{

        const token = thunkAPI.getState().auth.user.token;

        console.log("delete car")

        console.log(token);

        console.log(id);

        const data = await carService.deleteCar(id, token);

        // Check for errors
        if(data.errors) return thunkAPI.rejectWithValue(data.errors[0]);

        return data;
});






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
                .addCase(deleteCar.pending, (state) => {
                    state.loading = true;
                    state.error = false;
                })
                .addCase(deleteCar.fulfilled, (state, action) => {
    
                    state.loading = false;
                    state.success = true;
                    state.error = null;
                    state.message = action.payload.message;
                })
                .addCase(deleteCar.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.photo = {};
                })
                .addCase(updateCar.pending, (state) => {
                    state.loading = true;
                    state.error = false;
                })
                .addCase(updateCar.fulfilled, (state, action) => {
                    state.loading = false;
                    state.success = true;
                    state.error = null;
                    state.car = action.payload;
                    state.cars.push(state.car);
                    state.message = "Carro atualizado com sucesso!"
                })
                .addCase(updateCar.rejected, (state, action) =>{
                    state.loading = false;
                    state.error = action.payload;
                    state.car = {};
                })
    }

});

export const { resetMessage } = carSlice.actions;
export default carSlice.reducer;