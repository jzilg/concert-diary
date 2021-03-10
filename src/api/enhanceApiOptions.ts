import ApiRequest from '../entities/ApiRequest'

function enhanceApiOptions(options: ApiRequest): ApiRequest {
    const { method, headers, body } = options
    const enhancedOptions: ApiRequest = {
        ...options,
    }

    if (method === 'POST' || method === 'PUT') {
        enhancedOptions.headers = {
            'Content-Type': 'application/json',
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
