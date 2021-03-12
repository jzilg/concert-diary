import ApiOptions from '../entities/ApiOptions'

function enhanceApiOptions(options: ApiOptions): ApiOptions {
    const { method, headers, body } = options
    const enhancedOptions: ApiOptions = {
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
