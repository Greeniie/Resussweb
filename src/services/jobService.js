import AuthAPI from "./authInstance";
import userAuthAPI from "./userAuthInstance";

const getAll = async (data) => {
  const response = await AuthAPI.get(`/admin/job/list-jobs-v2`);
  return response.data;
};

const getAllFeatured = async (data) => {
  const response = await AuthAPI.get(`/admin/job/featured-jobs`);
  return response.data;
};

const getOne = async (data) => {
  const response = await AuthAPI.get(`/admin/job/show/${data}`);
  return response.data;
};

const featureJob = async (data) => {
  const response = await AuthAPI.post(`/admin/job/feature-job/${data}`);
  return response.data;
};

const createJob = async (data) => {
  const response = await userAuthAPI.post(`/user/jobs/post-job-v2`, data);
  return response.data;
};

const createRole = async (data) => {
  const response = await userAuthAPI.post(
    `/user/jobs/createClientJobRolesv2/${data.id}`,  
    data 
  );
  return response.data;
};



export const jobService = {
  getAll,
  getOne,
  getAllFeatured,
  featureJob,
  createJob,
  createRole,
};
