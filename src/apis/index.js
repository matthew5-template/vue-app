import axios from 'axios'

const request = axios.create({
  baseURL: '/public',
})

request.interceptors.request.use(
  (config) => {
    console.log('request', config)
    return config
  },
  (err) => {
    console.error('request', err)
  }
)
request.interceptors.response.use(
  (config) => {
    console.log('response', config)
    return config
  },
  (err) => {
    console.error('response', err)
  }
)

export default request
