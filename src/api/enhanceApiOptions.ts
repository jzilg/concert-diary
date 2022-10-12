import type ApiRequestOptions from '../entities/ApiRequestOptions'

const enhanceApiOptions = (options: ApiRequestOptions, token?: string): ApiRequestOptions => {
    const { method, headers, body } = options
    const enhancedOptions: ApiRequestOptions = {
        ...options,
    }

    if (method === 'POST' || method === 'PUT') {
        enhancedOptions.headers = {
            'Content-Type': 'application/json',
        }
    }

    if (token !== undefined) {
        enhancedOptions.headers = {
            ...enhancedOptions.headers,
            Authorization: `Bearer ${token}`,
        }
    }

    if (headers !== undefined) {
        enhancedOptions.headers = headers
    }

    if (body !== undefined) {
        enhancedOptions.body = body
    }

    return enhancedOptions
}

export default enhanceApiOptions
