import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { jobTagService } from '../services/jobTagService'

export const getAllJobTags = createAsyncThunk(
  'jobTags/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await jobTagService.getAll()
      return response
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const getOneJobTag = createAsyncThunk(
  'jobTags/getOne',
  async (data, { rejectWithValue }) => {
    try {
      const response = await jobTagService.getOne(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const createJobTag = createAsyncThunk(
  'jobTag/create',
  async (data, { rejectWithValue }) => {
    try {
      const response = await jobTagService.createJobTag(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const editJobTag = createAsyncThunk(
  'jobTag/edit',
  async (data, { rejectWithValue }) => {
    try {
      const response = await jobTagService.editJobTag(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const deleteJobTag = createAsyncThunk('jobTag/delete', async (data, { rejectWithValue }) => {
    try {
      const response = await jobTagService.deleteOne(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  })



const initialState = {
  data: [],
  singleData: {},
  loading: false,
  error: false,
  message: '',
}

const slice = createSlice({
  name: 'jobtags',
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
    [getAllJobTags.pending]: (state) => {
      if (state.data.length <= 0) {
        state.loading = true
      }
    },
    [getAllJobTags.fulfilled]: (state, action) => {
      state.error = false
      state.data = action.payload
      state.loading = false
    },
    [getAllJobTags.rejected]: (state, action) => {
      state.error = true
      state.message = action.payload
      state.loading = false
    },

    [getOneJobTag.pending]: (state) => {
      state.loading = true
    },
    [getOneJobTag.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
      state.singleData = payload
    },
    [getOneJobTag.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [createJobTag.pending]: (state) => {
      state.loading = true
    },
    [createJobTag.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [createJobTag.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [editJobTag.pending]: (state) => {
      state.loading = true
    },
    [editJobTag.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [editJobTag.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [deleteJobTag.pending]: (state) => {
        state.loading = true
      },
      [deleteJobTag.fulfilled]: (state, { payload }) => {
        state.message = payload?.message
        state.loading = false
      },
      [deleteJobTag.rejected]: (state, { payload }) => {
        state.error = true
        state.message = payload
        state.loading = false
      },

  },
})

export const { resetSingleData } = slice.actions
export default slice.reducer
