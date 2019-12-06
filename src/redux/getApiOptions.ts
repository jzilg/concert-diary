export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

type ApiOptions = {
    method: HTTPMethod
    headers?: HeadersInit
    body?: BodyInit
}

function getApiOptions({ method, headers, body }: ApiOptions): RequestInit {
    const options: ApiOptions = {
        method,
    }

    if (headers) {
        options.headers = headers
    }

    if (method === 'POST' || method === 'PUT') {
        options.headers = {
            'Content-Type': 'application/json',
            ...headers,
        }
    }

    if (body) {
        options.body = body
    }

    return options
}

export default getApiOptions
