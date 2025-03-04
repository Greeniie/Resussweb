import AuthAPI from './authInstance'

const getSubscriptions = async (data) => {
  const response = await AuthAPI.get(`/admin/subscriptions/list`)
  return response.data
}


const getOne = async (data) => {
  const response = await AuthAPI.get(`/admin/subscriptions/get-one/${data}`)
  return response
}


export const subscriptionService = {
  getSubscriptions,
  getOne,

}
