import AuthAPI from './authInstance'

const getAll = async (data) => {
  const response = await AuthAPI.get(`/admin/transactions/list`)
  return response.data
}

const getAllByAdmin = async (data) => {
  const response = await AuthAPI.get(`/admin/transactions/admin/${data}`)
  return response.data
}

const getAllByUser = async (data) => {
  const response = await AuthAPI.get(`/admin/transactions/user/${data}`)
  return response.data
}
const getOne = async (data) => {
  const response = await AuthAPI.get(`/admin/transactions/show/${data}`)
  return response.data
}

const approve = async (data) => {
  const response = await AuthAPI.post(`/admin/transaction/approve`, { transaction_id: data })
  return response.data
}

const decline = async (data) => {
  const response = await AuthAPI.post(`/admin/transaction/decline`, { transaction_id: data })
  return response.data
}

export const transactionService = {
  getAll,
  getAllByUser,
  getAllByAdmin,
  getOne,
  approve,
  decline,
}
