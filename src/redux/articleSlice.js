import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { articleService } from "../services/ArticleService";

export const getAllArticles = createAsyncThunk(
  "article/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await articleService.getAll();
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getOneArticle = createAsyncThunk(
  "article/getOne",
  async (data, { rejectWithValue }) => {
    try {
      const response = await articleService.getOne(data);
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState = {
  data: [],
  singleData: {},
  loading: false,
  error: false,
  message: "",
};

const slice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    checkAll: (state) => {
      state.isChecked = !state.isChecked;
    },
    resetSingleData: (state) => {
      state.singleData = {};
    },
  },
  extraReducers: {
    [getAllArticles.pending]: (state) => {
      if (state.data.length <= 0) {
        state.loading = true;
      }
    },
    [getAllArticles.fulfilled]: (state, action) => {
      state.error = false;
      state.data = action.payload;
      state.loading = false;
    },
    [getAllArticles.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [getOneArticle.pending]: (state) => {
      state.loading = true;
    },
    [getOneArticle.fulfilled]: (state, { payload }) => {
      state.message = payload?.message;
      state.loading = false;
      state.singleData = payload;
    },
    [getOneArticle.rejected]: (state, { payload }) => {
      state.error = true;
      state.message = payload;
      state.loading = false;
    },
  },
});

export const { resetSingleData } = slice.actions;
export default slice.reducer;
