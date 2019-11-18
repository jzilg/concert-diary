export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

type ApiOptions = {
    method: HTTPMethod
    headers?: object
    body?: string
}

type ApiOptionsConfig = ApiOptions

function getApiOptions({ method, headers, body }: ApiOptionsConfig): ApiOptions {
    const options: ApiOptions = {
        method,
    }

    if (method === 'POST' || method === 'PUT') {
        options.headers = {
            'Content-Type': 'application/json',
            ...headers,
        }
    } else if (headers) {
        options.headers = {
            ...headers,
        }
    }

    if (body) {
        options.body = body
    }

    return options
}

export default getApiOptions
