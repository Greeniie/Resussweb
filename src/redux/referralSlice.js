import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { referralService } from "../services/referralService";

export const getAllReferrals = createAsyncThunk(
  "referrals/getReferrals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await referralService.getReferrals();
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getInactiveReferrals = createAsyncThunk(
  "referrals/getInactiveReferrals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await referralService.getInactiveReferrals();
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const createReferralCode = createAsyncThunk(
  "referralcode/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.createReferralCode(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getAllAgentReferral = createAsyncThunk(
  "referralcode/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.getAllAgentReferral(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);


export const getAllAgentCurrentUReferralSubscribedUsers = createAsyncThunk(
  "referralcode/currentSubs",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.getAllAgentCurrentUReferralSubscribedUsers(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getAllAgentUReferralSubscribedUsers = createAsyncThunk(
  "referralcode/allSubs",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.getAllAgentUReferralSubscribedUsers(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getAllAgentCurrentUReferralUsers = createAsyncThunk(
  "referralcode/allReferees",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.getAllAgentCurrentUReferralUsers(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const calculateAgentReferralPayout = createAsyncThunk(
  "referralcode/allAgentPayout",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.calculateAgentReferralPayout(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const calculateAgentReferralCodePayout = createAsyncThunk(
  "referralcode/agentCodePayout",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.calculateAgentReferralCodePayout(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const referralCodeEarningSinceLastPayout = createAsyncThunk(
  "referralcode/referralCodeEarningSinceLastPayout",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.referralCodeEarningSinceLastPayout(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const referralCodeEarningSinceLastPayoutInAMonth = createAsyncThunk(
  "referralcode/referralCodeEarningSinceLastPayoutInAMonth",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.referralCodeEarningSinceLastPayoutInAMonth(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const referralCodeEarningInACustomMonth = createAsyncThunk(
  "referralcode/referralCodeEarningInACustomMonth",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.referralCodeEarningInACustomMonth(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const activeAgentReferralCodeUpdate = createAsyncThunk(
  "referralcode/activeAgentReferralCodeUpdate",
  async (data, { rejectWithValue }) => {
    try {
      const response = await referralService.activeAgentReferralCodeUpdate(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState = {
  activeReferrals: [],
  inactiveReferrals: [],
  singleData: {},
  loading: false,
  error: false,
  message: "",
};

const slice = createSlice({
  name: "referral",
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
    [getAllReferrals.pending]: (state) => {
      state.loading = true;
    },
    [getAllReferrals.fulfilled]: (state, action) => {
      state.error = false;
      state.activeReferrals = action.payload; 
      state.loading = false;
    },
    [getAllReferrals.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [getAllAgentCurrentUReferralUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllAgentCurrentUReferralUsers.fulfilled]: (state, action) => {
      state.error = false;
      state.activeReferrals = action.payload; 
      state.loading = false;
    },
    [getAllAgentCurrentUReferralUsers.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [referralCodeEarningSinceLastPayout.pending]: (state) => {
      state.loading = true;
    },
    [referralCodeEarningSinceLastPayout.fulfilled]: (state, action) => {
      state.error = false;
      state.activeReferrals = action.payload; 
      state.loading = false;
    },
    [referralCodeEarningSinceLastPayout.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [referralCodeEarningSinceLastPayoutInAMonth.pending]: (state) => {
      state.loading = true;
    },
    [referralCodeEarningSinceLastPayoutInAMonth.fulfilled]: (state, action) => {
      state.error = false;
      state.activeReferrals = action.payload; 
      state.loading = false;
    },
    [referralCodeEarningSinceLastPayoutInAMonth.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [referralCodeEarningInACustomMonth.pending]: (state) => {
      state.loading = true;
    },
    [referralCodeEarningInACustomMonth.fulfilled]: (state, action) => {
      state.error = false;
      state.activeReferrals = action.payload; 
      state.loading = false;
    },
    [referralCodeEarningInACustomMonth.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [activeAgentReferralCodeUpdate.pending]: (state) => {
      state.loading = true;
    },
    [activeAgentReferralCodeUpdate.fulfilled]: (state, action) => {
      state.error = false;
      state.activeReferrals = action.payload; 
      state.loading = false;
    },
    [activeAgentReferralCodeUpdate.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [getAllAgentCurrentUReferralSubscribedUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllAgentCurrentUReferralSubscribedUsers.fulfilled]: (state, action) => {
      state.error = false;
      state.activeReferrals = action.payload; 
      state.loading = false;
    },
    [getAllAgentCurrentUReferralSubscribedUsers.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [getAllAgentUReferralSubscribedUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllAgentUReferralSubscribedUsers.fulfilled]: (state, action) => {
      state.error = false;
      state.activeReferrals = action.payload; 
      state.loading = false;
    },
    [getAllAgentUReferralSubscribedUsers.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [getInactiveReferrals.pending]: (state) => {
      state.loading = true;
    },
    [getInactiveReferrals.fulfilled]: (state, action) => {
      state.error = false;
      state.inactiveReferrals = action.payload; 
      state.loading = false;
    },
    [getInactiveReferrals.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [getAllAgentReferral.pending]: (state) => {
      state.loading = true;
    },
    [getAllAgentReferral.fulfilled]: (state, action) => {
      state.error = false;
      state.allAgentReferrals = action.payload;
      state.loading = false;
    },
    [getAllAgentReferral.rejected]: (state, action) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },

    [createReferralCode.pending]: (state) => {
      state.loading = true;
    },
    [createReferralCode.fulfilled]: (state, { payload }) => {
      state.message = payload?.message;
      state.loading = false;
    },
    [createReferralCode.rejected]: (state, { payload }) => {
      state.error = true;
      state.message = payload;
      state.loading = false;
    },

    [calculateAgentReferralPayout.pending]: (state) => {
      state.loading = true;
    },
    [calculateAgentReferralPayout.fulfilled]: (state, { payload }) => {
      state.message = payload?.message;
      state.loading = false;
    },
    [calculateAgentReferralPayout.rejected]: (state, { payload }) => {
      state.error = true;
      state.message = payload;
      state.loading = false;
    },
    [calculateAgentReferralCodePayout.pending]: (state) => {
      state.loading = true;
    },
    [calculateAgentReferralCodePayout.fulfilled]: (state, { payload }) => {
      state.message = payload?.message;
      state.loading = false;
    },
    [calculateAgentReferralCodePayout.rejected]: (state, { payload }) => {
      state.error = true;
      state.message = payload;
      state.loading = false;
    },
  },
});


export const { resetSingleData } = slice.actions;
export default slice.reducer;
