import AuthAPI from "./authInstance";

const getReferrals = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/getAllActiveReferralCode/${data}`
  );
  return response.data;
};

const getInactiveReferrals = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/getNoneActiveReferralCode/${data}`
  );
  return response.data;
};

const getAllAgentReferral = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/getAllAgentReferral/${data}`,
    data
  );
  return response.data;
};

const createReferralCode = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/createAgentReferralCode/${data.user_id}`,
    data
  );
  return response.data;
};

const getAllAgentCurrentUReferralUsers = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/getAllAgentCurrentUReferralUsers/${data.agent_id}`,
    data
  );
  return response.data;
};

const calculateAgentReferralPayout = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/calculateAgentReferralPayout/${data.agent_id}`,
    data
  );
  return response.data;
};

const getAllAgentUReferralSubscribedUsers = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/getAllAgentUReferralSubscribedUsers/${data.agent_id}`,
    data
  );
  return response.data;
};

const getAllAgentCurrentUReferralSubscribedUsers = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/getAllAgentCurrentUReferralSubscribedUsers/${data.agent_id}`,
    data
  );
  return response.data;
};

const calculateAgentReferralCodePayout = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/calculateAgentReferralCodePayout/${data.agent_id}`,
    data
  );
  return response.data;
};

const referralCodeEarningSinceLastPayout = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/referralCodeEarningSinceLastPayout/${data.agent_id}`,
    data
  );
  return response.data;
};

const referralCodeEarningSinceLastPayoutInAMonth = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/referralCodeEarningSinceLastPayoutInAMonth/${data.agent_id}`,
    data
  );
  return response.data;
};

const referralCodeEarningInAMonth = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/referralCodeEarningInAMonth/${data.user_id}`,
    data
  );
  return response.data;
};

const referralCodeEarningInACustomMonth = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/referralCodeEarningInACustomMonth/${data.agent_id}`,
    data
  );
  return response.data;
};

const activeAgentReferralCodeUpdate = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/activeAgentReferralCodeUpdate/${data.user_id}`,
    data
  );
  return response.data;
};

const getAllAgentReferralCodes = async (data) => {
  const response = await AuthAPI.post(
    `/admin/job/getAllAgentReferralCodes/${data.user_id}`,
    data
  );
  return response.data;
};

export const referralService = {
  getReferrals,
  getInactiveReferrals,
  getAllAgentReferral,
  createReferralCode,
  getAllAgentCurrentUReferralUsers,
  calculateAgentReferralPayout,
  getAllAgentCurrentUReferralSubscribedUsers,
  calculateAgentReferralCodePayout,
  referralCodeEarningSinceLastPayout,
  referralCodeEarningSinceLastPayoutInAMonth,
  referralCodeEarningInAMonth,
  referralCodeEarningInACustomMonth,
  activeAgentReferralCodeUpdate,
  getAllAgentReferralCodes,
  getAllAgentUReferralSubscribedUsers
};
