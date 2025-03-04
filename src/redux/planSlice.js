import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { planService } from '../services/planService'

export const getAllPlans = createAsyncThunk(
  'plan/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await planService.getAll()
      return response?.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const getAllSubscriptions = createAsyncThunk(
  'plan/getSubscriptions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await planService.getSubscriptions()
      return response?.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const getOnePlan = createAsyncThunk(
  'plan/getOne',
  async (data, { rejectWithValue }) => {
    try {
      const response = await planService.getOne(data)
      return response?.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const createPlan = createAsyncThunk(
  'plan/create',
  async (data, { rejectWithValue }) => {
    try {
      const response = await planService.createPlan(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const editPlan = createAsyncThunk(
  'plan/edit',
  async (data, { rejectWithValue }) => {
    try {
      const response = await planService.editPlan(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const hideShowPlan = createAsyncThunk(
  'plan/hideShowPlan',
  async (data, { rejectWithValue }) => {
    try {
      const response = await planService.hideShowPlan(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const suspendPlan = createAsyncThunk(
  'plan/suspendPlan',
  async (data, { rejectWithValue }) => {
    try {
      const response = await planService.suspendPlan(data)
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
  name: 'plan',
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
    [getAllPlans.pending]: (state) => {
      if (state.data.length <= 0) {
        state.loading = true
      }
    },
    [getAllPlans.fulfilled]: (state, action) => {
      state.error = false
      state.data = action.payload
      state.loading = false
    },
    [getAllPlans.rejected]: (state, action) => {
      state.error = true
      state.message = action.payload
      state.loading = false
    },

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

    [getOnePlan.pending]: (state) => {
      state.loading = true
    },
    [getOnePlan.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
      state.singleData = payload
    },
    [getOnePlan.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [createPlan.pending]: (state) => {
      state.loading = true
    },
    [createPlan.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [createPlan.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [editPlan.pending]: (state) => {
      state.loading = true
    },
    [editPlan.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [editPlan.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [hideShowPlan.pending]: (state) => {
      state.loading = true
    },
    [hideShowPlan.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [hideShowPlan.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [suspendPlan.pending]: (state) => {
      state.loading = true
    },
    [suspendPlan.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [suspendPlan.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },
  },
})

export const { resetSingleData } = slice.actions
export default slice.reducer
