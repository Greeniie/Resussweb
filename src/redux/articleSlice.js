import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { articleService } from '../services/ArticleService'

export const getAllArticles = createAsyncThunk(
  'article/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await articleService.getAll()
      return response
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const getOneArticle = createAsyncThunk(
  'article/getOne',
  async (data, { rejectWithValue }) => {
    try {
      const response = await articleService.getOne(data)
      return response
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const createArticle = createAsyncThunk(
  'article/create',
  async (data, { rejectWithValue }) => {
    try {
      const response = await articleService.createArticle(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const editArticle = createAsyncThunk('article/edit', async (data, { rejectWithValue }) => {
  try {
    const response = await articleService.editArticle(data)
    return response.data
  } catch (error) {
    return rejectWithValue(error?.response?.data)
  }
})

export const hideArticle = createAsyncThunk(
  'article/hide',
  async (data, { rejectWithValue }) => {
    try {
      const response = await articleService.hideArticle(data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)

export const unhideArticle = createAsyncThunk(
  'article/unhide',
  async (data, { rejectWithValue }) => {
    try {
      const response = await articleService.unhideArticle(data)
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
  name: 'articles',
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
    [getAllArticles.pending]: (state) => {
      if (state.data.length <= 0) {
        state.loading = true
      }
    },
    [getAllArticles.fulfilled]: (state, action) => {
      state.error = false
      state.data = action.payload
      state.loading = false
    },
    [getAllArticles.rejected]: (state, action) => {
      state.error = true
      state.message = action.payload
      state.loading = false
    },

    [getOneArticle.pending]: (state) => {
      state.loading = true
    },
    [getOneArticle.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
      state.singleData = payload
    },
    [getOneArticle.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [createArticle.pending]: (state) => {
      state.loading = true
    },
    [createArticle.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [createArticle.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [editArticle.pending]: (state) => {
      state.loading = true
    },
    [editArticle.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [editArticle.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [hideArticle.pending]: (state) => {
      state.loading = true
    },
    [hideArticle.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [hideArticle.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },

    [unhideArticle.pending]: (state) => {
      state.loading = true
    },
    [unhideArticle.fulfilled]: (state, { payload }) => {
      state.message = payload?.message
      state.loading = false
    },
    [unhideArticle.rejected]: (state, { payload }) => {
      state.error = true
      state.message = payload
      state.loading = false
    },
  },
})

export const { resetSingleData } = slice.actions
export default slice.reducer
