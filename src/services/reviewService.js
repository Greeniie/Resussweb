import AuthAPI from './authInstance'

const getReviews = async (data) => {
  const response = await AuthAPI.get(`/admin/reviews/list`)
  return response.data
}

const deleteOne = async (data) => {
    const response = await AuthAPI.delete(`/admin/reviews/delete/${data}`)
    return response.data
  }


export const reviewService = {
  getReviews,
  deleteOne
}
