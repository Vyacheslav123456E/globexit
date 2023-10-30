import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getReport, getUserFilter} from '../services/report_api'

export interface IReportState {
    dataReport: [],
    user: []
}

const initialState: IReportState = {
    dataReport: [],
    user: []
};
export const Report = createAsyncThunk(
    'Report',
    async () => {
        const response = await getReport();
        return response
    }
)
export const UserFilter = createAsyncThunk(
    'UserFilter',
    async (payload) => {
        const response = await getUserFilter(payload);
        return response
    }
)

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(Report.fulfilled, (state, action) => {
            state.dataReport = action.payload
        })
        builder.addCase(UserFilter.fulfilled, (state, action) => {
            state.user = action.payload
        })
    },
});
export default usersSlice.reducer;