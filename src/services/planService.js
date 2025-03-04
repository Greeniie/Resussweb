import AuthAPI from './authInstance'

const getAll = async (data) => {
  const response = await AuthAPI.get(`/admin/plans/get-plans`)
  return response.data
}

const getSubscriptions = async (data) => {
  const response = await AuthAPI.get(`/admin/subscriptions/list`)
  return response.data
}


const getOne = async (data) => {
  const response = await AuthAPI.get(`/admin/plans/get-one/${data}`)
  return response.data
}

const createPlan = async (data) => {
  const response = await AuthAPI.post(`/admin/plans/create-plan`, data)
  return response.data
}

const editPlan = async (data) => {
  const response = await AuthAPI.put(`/admin/plans/edit-plan/${data.id}`, data)
  return response.data
}

const hideShowPlan = async (data) => {
  const response = await AuthAPI.put(`/admin/plans/toggle-plan/${data}`)
  return response.data
}


const suspendPlan = async (data) => {
  const response = await AuthAPI.put(`/admin/plans/suspend-plan/${data}`);
  return response.data;
};

export const planService = {
  getAll,
  getSubscriptions,
  getOne,
  createPlan,
  editPlan,
  hideShowPlan,
  suspendPlan
}
