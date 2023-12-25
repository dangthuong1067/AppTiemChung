import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CategoryService9 from "../../services/category9";
export const fetchInfo9 = createAsyncThunk(
    'info9/fetchInfo9',
    async (data, thunkAPI) => {
        const response = await CategoryService9.getCategory9(data)
        return response.data
    }
)
export const infoSlice9 = createSlice({
    name: 'Info9',
    initialState: {
        info9: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfo9.fulfilled, (state, action) => {
                state.info9 = action.payload
            })
            .addCase(fetchInfo9.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

export const { toggleInfo9 } = infoSlice9.actions

export default infoSlice9.reducer