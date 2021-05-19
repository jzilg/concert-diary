import Concert from '../entities/Concert'
import Festival from '../entities/Festival'
import RequestOptions from '../entities/ApiRequestOptions'
import enhanceApiOptions from './enhanceApiOptions'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { API_URL } = import.meta.env

const getAuthApiUrl = (): string => `${API_URL}/login`

const getRegisterApiUrl = (): string => `${API_URL}/register`

const getConcertsApiUrl = (id?: Concert['id']): string => {
    const path = id !== undefined
        ? `/concerts/${id}`
        : '/concerts'

    return `${API_URL}${path}`
}

const getFestivalsApiUrl = (id?: Festival['id']): string => {
    const path = id !== undefined
        ? `/festivals/${id}`
        : '/festivals'

    return `${API_URL}${path}`
}

const getStatisticsApiUrl = (): string => `${API_URL}/statistics`

export const getLoginOptions = (data: unknown) : RequestOptions => enhanceApiOptions({
    url: getAuthApiUrl(),
    method: 'POST',
    body: JSON.stringify(data),
})

export const getRegisterOptions = (data: unknown): RequestOptions => enhanceApiOptions({
    url: getRegisterApiUrl(),
    method: 'POST',
    body: JSON.stringify(data),
})

export const getLoadAllConcertsOptions = (apiToken: string): RequestOptions => enhanceApiOptions({
    url: getConcertsApiUrl(),
    method: 'GET',
}, apiToken)

export const getLoadConcertOptions = (apiToken: string, id: Concert['id']): RequestOptions => enhanceApiOptions({
    url: getConcertsApiUrl(id),
    method: 'GET',
}, apiToken)

export const getDeleteConcertOptions = (apiToken: string, id: Concert['id']): RequestOptions => enhanceApiOptions({
    url: getConcertsApiUrl(id),
    method: 'DELETE',
}, apiToken)

export const getSaveNewConcertOptions = (apiToken: string, concert: Concert): RequestOptions => (
    enhanceApiOptions({
        url: getConcertsApiUrl(),
        method: 'POST',
        body: JSON.stringify(concert),
    }, apiToken)
)

export const getSaveConcertOptions = (apiToken: string, concert: Concert): RequestOptions => (
    enhanceApiOptions({
        url: getConcertsApiUrl(concert.id),
        method: 'PUT',
        body: JSON.stringify(concert),
    }, apiToken)
)

export const getLoadAllFestivalsOptions = (apiToken: string): RequestOptions => enhanceApiOptions({
    url: getFestivalsApiUrl(),
    method: 'GET',
}, apiToken)

export const getLoadFestivalOptions = (apiToken: string, id: Festival['id']): RequestOptions => enhanceApiOptions({
    url: getFestivalsApiUrl(id),
    method: 'GET',
}, apiToken)

export const getDeleteFestivalOptions = (apiToken: string, id: Festival['id']): RequestOptions => enhanceApiOptions({
    url: getFestivalsApiUrl(id),
    method: 'DELETE',
}, apiToken)

export const getSaveNewFestivalOptions = (apiToken: string, concert: Festival): RequestOptions => (
    enhanceApiOptions({
        url: getFestivalsApiUrl(),
        method: 'POST',
        body: JSON.stringify(concert),
    }, apiToken)
)

export const getSaveFestivalOptions = (apiToken: string, concert: Festival): RequestOptions => (
    enhanceApiOptions({
        url: getFestivalsApiUrl(concert.id),
        method: 'PUT',
        body: JSON.stringify(concert),
    }, apiToken)
)

export const getStatisticsOptions = (apiToken: string): RequestOptions => enhanceApiOptions({
    url: getStatisticsApiUrl(),
    method: 'GET',
}, apiToken)
