import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CategoryService10 from "../../services/category10";
export const fetchInfo10 = createAsyncThunk(
    'info10/fetchInfo10',
    async (data, thunkAPI) => {
        const response = await CategoryService10.getCategory10(data)
        return response.data
    }
)
export const infoSlice10 = createSlice({
    name: 'Info10',
    initialState: {
        info10: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfo10.fulfilled, (state, action) => {
                state.info10 = action.payload
            })
            .addCase(fetchInfo10.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

export const { toggleInfo10 } = infoSlice10.actions

export default infoSlice10.reducer