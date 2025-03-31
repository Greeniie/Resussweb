import AuthAPI from './authInstance'

const getAll = async (data) => {
  const response = await AuthAPI.get(`/user/articles/list`)
  return response.data
}

const getOne = async (data) => {
  const response = await AuthAPI.get(`/user/articles/show/${data}`)
  return response.data
}


export const articleService = {
  getAll,
  getOne,
}
