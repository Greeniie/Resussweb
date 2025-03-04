import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { subscriptionService } from '../services/subscriptionService'


export const getAllSubscriptions = createAsyncThunk(
  'subscription/getSubscriptions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await subscriptionService.getSubscriptions()
      return response
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const getOneSubscription = createAsyncThunk(
  'subscription/getOne',
  async (data, { rejectWithValue }) => {
    try {
      const response = await subscriptionService.getOne(data)
      return response?.data
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
  name: 'subscriptions',
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

    [getAllSubscriptions.pending]: (state) => {
      if (state.data.length <= 0) {
        state.loading = true
      }
    },
    [getAllSubscriptions.fulfilled]: (state, action) => {
      state.error = false
      state.data = action.payload
      state.loading = false
    },
    [getAllSubscriptions.rejected]: (state, action) => {
      state.error = true
      state.message = action.payload
      state.loading = false
    },

    [getOneSubscription.pending]: (state) => {
      state.loading = true
    },
    [getOneSubscription.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
      state.singleData = payload
    },
    [getOneSubscription.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

  },
})

export const { resetSingleData } = slice.actions
export default slice.reducer
