import Concert from './entities/Concert'
import Festival from './entities/Festival'

const TOKEN_STORAGE_ID = 'api_token'

export function setApiToken(apiToken: string): void {
    window.sessionStorage.setItem(TOKEN_STORAGE_ID, apiToken)
}

function getApiToken(): string {
    return window.sessionStorage.getItem(TOKEN_STORAGE_ID) || ''
}

export function getConcertsApiUrl(id?: Concert['id']): string {
    const path = id !== undefined
        ? `/concerts/${id}`
        : '/concerts'

    return `${process.env.API_URL}${path}?api_token=${getApiToken()}`
}

export function getFestivalsApiUrl(id?: Festival['id']): string {
    const path = id !== undefined
        ? `/festivals/${id}`
        : '/festivals'

    return `${process.env.API_URL}${path}?api_token=${getApiToken()}`
}
