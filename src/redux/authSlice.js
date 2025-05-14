import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ExpirySession from "../utils/expirySession";
import { authService } from "../services/auth.service";

const user = ExpirySession.get("user");

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const response = await authService.login(data);
    if (response?.data?.access_token) {
      ExpirySession.set("user", response.data);
      ExpirySession.set("access", response.data.access_token);
    }
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});

export const loginAsUser = createAsyncThunk(
  "auth/loginAsUser",
  async (data, thunkAPI) => {
    try {
      const response = await authService.loginAsUser(data);
      if (response?.data?.access_token) {
        ExpirySession.set("resussUser", response.data);
      }
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const response = await authService.signup(data);
      if (response?.data?.access_token) {
        ExpirySession.set("user", response.data);
        ExpirySession.set("access", response.data.access_token);
      }
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const sendOTP = createAsyncThunk(
  "auth/sendOTP",
  async (data, thunkAPI) => {
    try {
      const response = await authService.sendOTP(data);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const sendSignupOTP = createAsyncThunk(
  "auth/sendSignupOTP",
  async (data, thunkAPI) => {
    try {
      const response = await authService.sendSignupOTP(data);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const verifySignupOTP = createAsyncThunk(
  "auth/verifySignupOTP",
  async (data, thunkAPI) => {
    try {
      const response = await authService.verifySignupOTP(data);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "auth/verifyOTP",
  async (data, thunkAPI) => {
    try {
      const response = await authService.verifyOTP(data);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (data, thunkAPI) => {
    try {
      const response = await authService.changePassword(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data, thunkAPI) => {
    try {
      const response = await authService.resetPassword(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

const initialState = user?.access_token
  ? { isLoggedIn: true, user, message: null, email: null }
  : { isLoggedIn: false, user: null, message: null, email: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload?.data;
      state.message = payload?.message;
      state.loading = false;
    },
    [login.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.loading = false;
    },
    [loginAsUser.pending]: (state) => {
      state.loading = true;
    },
    [loginAsUser.fulfilled]: (state, { payload }) => {
      state.user = payload?.data;
      state.message = payload?.message;
      state.loading = false;
    },
    [loginAsUser.rejected]: (state) => {
      state.loading = false;
    },
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload?.data;
      state.message = payload?.message;
      state.loading = false;
    },
    [signup.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.loading = false;
    },

    [sendOTP.pending]: (state) => {
      state.loading = true;
    },
    [sendOTP.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.adminEmail = payload;
    },
    [sendOTP.rejected]: (state) => {
      state.loading = false;
    },
    [sendSignupOTP.pending]: (state) => {
      state.loading = true;
    },
    [sendSignupOTP.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.adminEmail = payload;
    },
    [sendSignupOTP.rejected]: (state) => {
      state.loading = false;
    },

    [verifySignupOTP.pending]: (state) => {
      state.loading = true;
    },
    [verifySignupOTP.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.adminEmail = payload;
    },
    [verifySignupOTP.rejected]: (state) => {
      state.loading = false;
    },
    [verifyOTP.pending]: (state) => {
      state.loading = true;
    },
    [verifyOTP.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.adminEmail = payload;
    },
    [verifyOTP.rejected]: (state) => {
      state.loading = false;
    },

    [resetPassword.pending]: (state) => {
      state.loading = true;
    },
    [resetPassword.fulfilled]: (state) => {
      state.loading = false;
    },
    [resetPassword.rejected]: (state) => {
      state.loading = false;
    },

    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;

export default reducer;
