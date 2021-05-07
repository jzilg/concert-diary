type ApiRequestOptions = RequestInit & {
    url: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export default ApiRequestOptions
