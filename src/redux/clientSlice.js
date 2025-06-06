import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { clientService } from '../services/clients.service'


export const getAllClients = createAsyncThunk(
  'talents/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientService.getAll()
      return response
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const getOneClient = createAsyncThunk(
  'talents/getOne',
  async (data, { rejectWithValue }) => {
    try {
      const response = await clientService.getOne(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const verifyToggle = createAsyncThunk(
  'client/verifyToggle',
  async (data, { rejectWithValue }) => {
    try {
      const response = await clientService.toggleVerify(data)
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
  name: 'users',
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
    [getAllClients.pending]: (state) => {
      if (state.data.length <= 0) {
        state.loading = true
      }
    },
    [getAllClients.fulfilled]: (state, action) => {
      state.error = false
      state.data = action.payload
      state.loading = false
    },
    [getAllClients.rejected]: (state, action) => {
      state.error = true
      state.message = action.payload
      state.loading = false
    },


    [getOneClient.pending]: (state) => {
      state.loading = true
    },
    [getOneClient.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
      state.singleData = payload
    },
    [getOneClient.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },


    [verifyToggle.pending]: (state) => {
      state.loading = true
    },
    [verifyToggle.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
      state.singleData = payload
    },
    [verifyToggle.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },
  },
})

export const { resetSingleData } = slice.actions
export default slice.reducer
