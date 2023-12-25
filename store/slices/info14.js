import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CategoryService14 from "../../services/category14";
export const fetchInfo14 = createAsyncThunk(
    'info14/fetchInfo14',
    async (data, thunkAPI) => {
        const response = await CategoryService14.getCategory14(data)
        return response.data
    }
)
export const infoSlice14 = createSlice({
    name: 'Info14',
    initialState: {
        info14: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfo14.fulfilled, (state, action) => {
                state.info14 = action.payload
            })
            .addCase(fetchInfo14.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

export const { toggleInfo14 } = infoSlice14.actions

export default infoSlice14.reducer