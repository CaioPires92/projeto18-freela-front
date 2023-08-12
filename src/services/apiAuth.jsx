import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

function signin(body) {
  const promise = axios.post(`${BASE_URL}/signin`, body)
  return promise
}

const apiAuth = { signin }

export default apiAuth
