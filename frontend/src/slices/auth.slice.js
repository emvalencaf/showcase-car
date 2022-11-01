
// modules
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
    // AUTH SERVICE
import authService from '../services/auth.service';





// get user credentials from localStorage
const user = JSON.parse(localStorage.getItem("user"));



const initialState = {
    user: user? user: null,
    error: false,
    success: false,
    loading: false
};


// Register an user and sign in
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {

    const data = await authService.register(user);


    // Check for errors
    if(data.errors) return thunkAPI.rejectWithValue(data.errors[0]);

    return data;
});


// Logout an user
export const logout = createAsyncThunk("auth/logout", async () => {

    await authService.logout();

});


// slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .add(register.fulfilled, (state, action) => {

                state.loading = false;
                state.success = true;
                state.error = null;
                state.user = action.payload;
            })
            addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
                state.user = null;
            })
            addCase(logout.fulfilled, (state, action) =>{
                state.loading = false;
                state.sucess = true;
                state.error = null;
                state.user = null;
            })
    }
});


export const { reset } = authSlice.actions;
export default authSlice.reducer;