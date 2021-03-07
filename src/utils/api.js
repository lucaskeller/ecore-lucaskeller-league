import axios from 'axios'

export default function api(path, { method, headers, body, ...config }) {
  const BASE_URL = ' https://jsonplaceholder.typicode.com/'
  if (method === 'GET' && body) {
    body = undefined
  } else {
    body = JSON.stringify(body)
  }
  return axios({
    url: `${BASE_URL}${path}`,
    method,
    body,
    data: body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ContentType: 'application/json',
      ...headers,
    },
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    })
}