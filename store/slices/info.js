import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CategoryService from "../../services/category";
export const fetchInfo = createAsyncThunk(
    'info/fetchInfo',
    async (data, thunkAPI) => {
        const response = await CategoryService.getCategory(data)
        return response.data
    }
)
export const infoSlice = createSlice({
    name: 'Info',
    initialState: {
        info: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfo.fulfilled, (state, action) => {
                state.info = action.payload
            })
            .addCase(fetchInfo.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

export const { toggleInfo } = infoSlice.actions

export default infoSlice.reducer