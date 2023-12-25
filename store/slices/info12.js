import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CategoryService12 from "../../services/category12";
//lấy ra thông tin user
export const fetchInfo12 = createAsyncThunk(
    'info12/fetchInfo12',
    async (data, thunkAPI) => {
        const response = await CategoryService12.getCategory12(data)
        return response.data
    }
)
export const infoSlice12 = createSlice({
    name: 'Info12',
    initialState: {
        info12: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfo12.pending, (state, action) => {
            })
            .addCase(fetchInfo12.fulfilled, (state, action) => {
                state.info12 = action.payload
            })
            .addCase(fetchInfo12.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

export const { toggleInfo12 } = infoSlice12.actions

export default infoSlice12.reducer