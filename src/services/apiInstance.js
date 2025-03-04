import axios from 'axios'
import { liveBaseURL } from '../networkUrl'

const instance = axios.create({
  baseURL: liveBaseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})


export default instance
