import AuthAPI from "./authInstance";

const getAll = async (data) => {
  const response = await AuthAPI.get(`/user/talent/all`);
  return response.data;
};

const getOne = async (data) => {
  const response = await AuthAPI.get(`/user/talent/get-one/${data}`);
  return response;
};

const toggleVerify = async (data) => {
  const response = await AuthAPI.post(`/admin/client/verify/${data}`)
  return response.data
}



export const clientService = {
  getAll,
  getOne,
  toggleVerify
};
