import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { jobService } from '../services/jobService.js'

export const getAllJobs = createAsyncThunk(
  'job/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await jobService.getAll()
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const getOneJob = createAsyncThunk(
  'job/getOne',
  async (data, { rejectWithValue }) => {
    try {
      const response = await jobService.getOne(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const featureJob = createAsyncThunk(
  'job/feature',
  async (data, { rejectWithValue }) => {
    try {
      const response = await jobService.featureJob(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const createJob = createAsyncThunk(
  'job/create',
  async (data, { rejectWithValue }) => {
    try {
      const response = await jobService.createJob(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const createRole = createAsyncThunk(
  'role/create',
  async (data, { rejectWithValue }) => {
    try {
      const response = await jobService.createRole(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

// export const editJob = createAsyncThunk('company/edit', async (data, { rejectWithValue }) => {
//   try {
//     const response = await jobService.editJob(data)
//     return response.data
//   } catch (error) {
//     return rejectWithValue(error?.response?.data)
//   }
// })

// export const deleteJob = createAsyncThunk(
//   'job/delete',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await jobService.deleteOne(data)
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error?.response?.data)
//     }
//   },
// )

const initialState = {
  data: [],
  singleData: {},
  loading: false,
  error: false,
  message: '',
}

const slice = createSlice({
  name: 'jobs',
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
    [getAllJobs.pending]: (state) => {
      if (state.data.length <= 0) {
        state.loading = true
      }
    },
    [getAllJobs.fulfilled]: (state, action) => {
      state.error = false
      state.data = action.payload
      state.loading = false
    },
    [getAllJobs.rejected]: (state, action) => {
      state.error = true
      state.message = action.payload
      state.loading = false
    },

    [getOneJob.pending]: (state) => {
      state.loading = true
    },
    [getOneJob.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
      state.singleData = payload
    },
    [getOneJob.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [createJob.pending]: (state) => {
      state.loading = true
    },
    [createJob.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [createJob.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [createRole.pending]: (state) => {
      state.loading = true
    },
    [createRole.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [createRole.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [featureJob.pending]: (state) => {
      state.loading = true
    },
    [featureJob.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [featureJob.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    // [editJob.pending]: (state) => {
    //   state.loading = true
    // },
    // [editJob.fulfilled]: (state, { payload }) => {
    //   state.message = payload?.message
    //   state.loading = false
    // },
    // [editJob.rejected]: (state, { payload }) => {
    //   state.error = true
    //   state.message = payload
    //   state.loading = false
    // },

    // [deleteJob.pending]: (state) => {
    //   state.loading = true
    // },
    // [deleteJob.fulfilled]: (state, { payload }) => {
    //   state.message = payload?.message
    //   state.loading = false
    // },
    // [deleteJob.rejected]: (state, { payload }) => {
    //   state.error = true
    //   state.message = payload
    //   state.loading = false
    // },
  },
})

export const { resetSingleData } = slice.actions
export default slice.reducer
