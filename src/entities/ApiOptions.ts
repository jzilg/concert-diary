type ApiOptions = RequestInit & {
    url: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export default ApiOptions
