import Concert from './entities/Concert'
import Festival from './entities/Festival'

export function getAuthApiUrl(): string {
    return `${process.env.API_URL}/login`
}

export function getConcertsApiUrl(apiToken: string, id?: Concert['id']): string {
    const path = id !== undefined
        ? `/concerts/${id}`
        : '/concerts'

    return `${process.env.API_URL}${path}?api_token=${apiToken}`
}

export function getFestivalsApiUrl(apiToken: string, id?: Festival['id']): string {
    const path = id !== undefined
        ? `/festivals/${id}`
        : '/festivals'

    return `${process.env.API_URL}${path}?api_token=${apiToken}`
}

export function getStatisticsApiUrl(apiToken: string): string {
    return `${process.env.API_URL}/statistics?api_token=${apiToken}`
}
