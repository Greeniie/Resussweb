import AuthAPI from './authInstance'

const getAll = async (data) => {
  const response = await AuthAPI.get(`/admin/articles/list`)
  return response.data
}

const getOne = async (data) => {
  const response = await AuthAPI.get(`/admin/articles/get-article/${data}`)
  return response.data
}

const createArticle = async (data) => {
  const response = await AuthAPI.post(`/admin/articles/create`, data)
  return response.data
}

const editArticle = async (data) => {
  const response = await AuthAPI.post(`/admin/articles/edit/${data.id}`, data);
  return response.data;
};


const hideArticle = async (data) => {
  const response = await AuthAPI.put(`/admin/articles/hide/${data}`)
  return response.data
}

const unhideArticle = async (data) => {
  const response = await AuthAPI.put(`/admin/articles/unhide/${data}`)
  return response.data
}

export const articleService = {
  getAll,
  getOne,
  createArticle,
  editArticle,
  hideArticle,
  unhideArticle
}
