import axios from 'axios'

const { REACT_APP_API_URL: apiBaseUrl } = process.env

async function get<T>(route: string): Promise<T> {
  const url = `${apiBaseUrl}${route}`

  const { data } = await axios.get(url)

  return data as T
}

async function post<T>(route: string, body: any): Promise<T> {
  const url = `${apiBaseUrl}${route}`

  const { data } = await axios.post(url, body)

  return data as T
}

// (TODO): Implement pagination with swr
// const getWithInfiniteSwr = (route: string, onSuccess = noop) => {

//   const fetcher = axios.get()
// }

export default {
  get,
  post
}
