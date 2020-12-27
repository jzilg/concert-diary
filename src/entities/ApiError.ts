type ApiError = {
    url: string
    status?: number
    type: 'fetch' | 'json' | 'response'
    message: string
}

export default ApiError
