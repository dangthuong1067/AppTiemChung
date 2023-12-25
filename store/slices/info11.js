import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CategoryService11 from "../../services/category11";
//lấy ra thông tin user
export const fetchInfo11 = createAsyncThunk(
    'info11/fetchInfo11',
    async (data, thunkAPI) => {
        const response = await CategoryService11.getCategory11(data)
        return response.data
    }
)
export const infoSlice11 = createSlice({
    name: 'Info11',
    initialState: {
        info11: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfo11.pending, (state, action) => {
            })
            .addCase(fetchInfo11.fulfilled, (state, action) => {
                state.info11 = action.payload
            })
            .addCase(fetchInfo11.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

export const { toggleInfo11 } = infoSlice11.actions

export default infoSlice11.reducer