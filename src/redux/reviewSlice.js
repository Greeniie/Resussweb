import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { reviewService } from '../services/reviewService'


export const getAllReviews = createAsyncThunk(
  'reviews/getReviews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await reviewService.getReviews()
      return response
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  },
)


export const deleteReview = createAsyncThunk('review/delete', async (data, { rejectWithValue }) => {
    try {
      const response = await reviewService.deleteOne(data)
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
  name: 'reviews',
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

    [getAllReviews.pending]: (state) => {
      if (state.data.length <= 0) {
        state.loading = true
      }
    },
    [getAllReviews.fulfilled]: (state, action) => {
      state.error = false
      state.data = action.payload
      state.loading = false
    },
    [getAllReviews.rejected]: (state, action) => {
      state.error = true
      state.message = action.payload
      state.loading = false
    },

    [deleteReview.pending]: (state) => {
        state.loading = true
      },
      [deleteReview.fulfilled]: (state, { payload }) => {
        state.message = payload?.message
        state.loading = false
      },
      [deleteReview.rejected]: (state, { payload }) => {
        state.error = true
        state.message = payload
        state.loading = false
      },


  },
})

export const { resetSingleData } = slice.actions
export default slice.reducer
