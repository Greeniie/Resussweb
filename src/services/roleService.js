import AuthAPI from './authInstance'

const getAll = async (data) => {
  const response = await AuthAPI.get(`/admin/job-roles/list`)
  return response.data
}

const getOne = async (data) => {
  const response = await AuthAPI.get(`/admin/job-roles/show/show/${data}`)
  return response.data
}

const createRole = async (data) => {
  const response = await AuthAPI.post(`/admin/job-roles/create`, data)
  return response.data
}

const editRole = async (data) => {
  const response = await AuthAPI.post(`/admin/job-roles/update`, data)
  return response.data
}

const deleteOne = async (data) => {
  const response = await AuthAPI.delete(`/admin/reviews/delete/${data}`)
  return response.data
}

const hideRole = async (data) => {
  const response = await AuthAPI.delete(`/admin/service-category/delete/${data.id}`, data.email)
  return response.data
}

export const roleService = {
  getAll,
  getOne,
  createRole,
  editRole,
  hideRole,
  deleteOne
}
