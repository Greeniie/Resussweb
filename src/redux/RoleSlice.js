import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { roleService } from '../services/roleService'

export const getAllRoles = createAsyncThunk(
  'role/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await roleService.getAll()
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const getOneRole = createAsyncThunk(
  'role/getOne',
  async (data, { rejectWithValue }) => {
    try {
      const response = await roleService.getOne(data)
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
      const response = await roleService.createRole(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const editRole = createAsyncThunk(
  'role/edit',
  async (data, { rejectWithValue }) => {
    try {
      const response = await roleService.editRole(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const deleteRole = createAsyncThunk('role/delete', async (data, { rejectWithValue }) => {
  try {
    const response = await roleService.deleteOne(data)
    return response.data
  } catch (error) {
    return rejectWithValue(error?.response?.data)
  }
})

export const hideRole = createAsyncThunk(
  'role/delete',
  async (data, { rejectWithValue }) => {
    try {
      const response = await roleService.deleteOne(data)
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
  name: 'role',
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
    [getAllRoles.pending]: (state) => {
      if (state.data.length <= 0) {
        state.loading = true
      }
    },
    [getAllRoles.fulfilled]: (state, action) => {
      state.error = false
      state.data = action.payload
      state.loading = false
    },
    [getAllRoles.rejected]: (state, action) => {
      state.error = true
      state.message = action.payload
      state.loading = false
    },

    [getOneRole.pending]: (state) => {
      state.loading = true
    },
    [getOneRole.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
      state.singleData = payload
    },
    [getOneRole.rejected]: (state, { payload }) => {
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

    [editRole.pending]: (state) => {
      state.loading = true
    },
    [editRole.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [editRole.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [deleteRole.pending]: (state) => {
      state.loading = true
    },
    [deleteRole.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [deleteRole.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },
  },
})

export const { resetSingleData } = slice.actions
export default slice.reducer
