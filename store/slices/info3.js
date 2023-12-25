import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CategoryService3 from "../../services/category3";
//để lấy ra thời gian tiêm
export const fetchInfo3 = createAsyncThunk(
    'info3/fetchInfo3',
    async (data, thunkAPI) => {
        const response = await CategoryService3.getCategory3(data)
        return response.data
    }
)
export const infoSlice3 = createSlice({
    name: 'Info3',
    initialState: {
        info3: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfo3.fulfilled, (state, action) => {
                state.info3 = action.payload
            })
            .addCase(fetchInfo3.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

export const { toggleInfo3 } = infoSlice3.actions

export default infoSlice3.reducer