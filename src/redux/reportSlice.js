import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { reportService  } from '../services/reportService'

export const getAllReports  = createAsyncThunk(
  'report/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await reportService.getAll()
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const getOneReport = createAsyncThunk(
  'report/getOne',
  async (data, { rejectWithValue }) => {
    try {
      const response = await reportService.getOne(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)



const initialState = {
  data: [],
  singleData: {},
  loading: false,
  error: false,
  message: '',
}

const slice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    checkAll: (state) => {
      state.isChecked = !state.isChecked
    },
    resetSingleData: (state) => {
      state.singleData = {}
    },
  },
  extraReducers: {
    [getAllReports .pending]: (state) => {
      if (state.data.length <= 0) {
        state.loading = true
      }
    },
    [getAllReports .fulfilled]: (state, action) => {
      state.error = false
      state.data = action.payload
      state.loading = false
    },
    [getAllReports .rejected]: (state, action) => {
      state.error = true
      state.message = action.payload
      state.loading = false
    },

    [getOneReport.pending]: (state) => {
      state.loading = true
    },
    [getOneReport.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
      state.singleData = payload
    },
    [getOneReport.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    
  },
})

export const { resetSingleData } = slice.actions
export default slice.reducer
