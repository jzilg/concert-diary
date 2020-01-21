import { createBrowserHistory } from 'history'

const { BASE_URL } = process.env

export default createBrowserHistory({ basename: BASE_URL })
