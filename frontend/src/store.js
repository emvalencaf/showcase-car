// modules
import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/auth.slice';
import carReducer from './slices/car.slice';

export const store = configureStore({
    reducer:{
        auth: authReducer,
        car: carReducer,
    }
});
