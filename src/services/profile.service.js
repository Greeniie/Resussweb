import AuthAPI from './authInstance'

const getProfile = async (data) => {
  const response = await AuthAPI.get(`/user/profile`)
  return response.data
}

const editProfile = async (data) => {
  const response = await AuthAPI.post(`/user/update-profile`, data)
  return response.data
}

const editProfilePicture = async (data) => {
  const response = await AuthAPI.post('/user/update-profile/picture', data)
  return response.data
}

export const profileService = {
  getProfile,
  editProfile,
  editProfilePicture,
}
