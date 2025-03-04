import AuthAPI from './authInstance'

const getAll = async () => {
  const response = await AuthAPI.get(`/admin/contact-us/list`)
  return response.data
}

const getOne = async (data) => {
  const response = await AuthAPI.get(`/admin/contact-us/show/${data}`)
  return response.data
}

export const SupportService = {
  getAll,
  getOne,
}
