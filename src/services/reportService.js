import AuthAPI from './authInstance'

const getAll = async (data) => {
  const response = await AuthAPI.get(`/admin/report/list`)
  return response.data
}

const getOne = async (data) => {
  const response = await AuthAPI.get(`/user/client/report/show/${data}`)
  return response.data
}


export const reportService = {
  getAll,
  getOne,
}
