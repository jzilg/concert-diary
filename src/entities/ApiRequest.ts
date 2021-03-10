type ApiRequest = RequestInit & {
    url: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export default ApiRequest
