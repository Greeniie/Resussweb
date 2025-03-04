import AuthAPI from './authInstance'

const getAll = async (data) => {
  const response = await AuthAPI.get(`/admin/job/get-job-tags`)
  return response.data
}

const getOne = async (data) => {
  const response = await AuthAPI.get(`/admin/job/get-job-tag/${data}`)
  return response.data
}

const createJobTag = async (data) => {
  const response = await AuthAPI.post(`/admin/job/create-job-tag`, data)
  return response.data
}

const editJobTag = async (data) => {
  const response = await AuthAPI.post(`/admin/job/edit-job-tag/${data.id}`, data)
  return response.data
}

const deleteOne = async (data) => {
    const response = await AuthAPI.delete(`/admin/job/delete-job-tag/${data}`)
    return response.data
  }




export const jobTagService = {
  getAll,
  getOne,
  createJobTag,
  editJobTag,
  deleteOne
}
