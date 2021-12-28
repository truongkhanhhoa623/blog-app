import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiAuth from "../../services/api/apiAuth";

const initialState = {
    loading: false,
    profile: {},
    errors: false,
}
export const getApiProfile= createAsyncThunk(
    'user/fetchUser',
    async () => {
        // const response = await userApi.getAll();
        const response = await apiAuth.getProfile()
        console.log(response)
        return response.data;
    }
);
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getApiProfile.fulfilled, (state, action) => {
                state.profile = action.payload.data
            });
    },
})

export const selectUser = (state) => state.user.profile;
export default userSlice.reducer
