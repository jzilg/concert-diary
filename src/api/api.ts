import Concert from '../entities/Concert'
import Festival from '../entities/Festival'
import ApiOptions from '../entities/ApiOptions'
import enhanceApiOptions from './enhanceApiOptions'

const { API_URL } = process.env

const getAuthApiUrl = (): string => `${process.env.API_URL}/login`

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

export const getLoginOptions = (data: unknown) : ApiOptions => enhanceApiOptions({
    url: getAuthApiUrl(),
    method: 'POST',
    body: JSON.stringify(data),
})

export const getLoadAllConcertsOptions = (apiToken: string): ApiOptions => enhanceApiOptions({
    url: getConcertsApiUrl(),
    method: 'GET',
}, apiToken)

export const getLoadConcertOptions = (apiToken: string, id: Concert['id']): ApiOptions => enhanceApiOptions({
    url: getConcertsApiUrl(id),
    method: 'GET',
}, apiToken)

export const getDeleteConcertOptions = (apiToken: string, id: Concert['id']): ApiOptions => enhanceApiOptions({
    url: getConcertsApiUrl(id),
    method: 'DELETE',
}, apiToken)

export const getSaveNewConcertOptions = (apiToken: string, concert: Concert): ApiOptions => (
    enhanceApiOptions({
        url: getConcertsApiUrl(),
        method: 'POST',
        body: JSON.stringify(concert),
    }, apiToken)
)

export const getSaveConcertOptions = (apiToken: string, concert: Concert): ApiOptions => (
    enhanceApiOptions({
        url: getConcertsApiUrl(concert.id),
        method: 'PUT',
        body: JSON.stringify(concert),
    }, apiToken)
)

export const getLoadAllFestivalsOptions = (apiToken: string): ApiOptions => enhanceApiOptions({
    url: getFestivalsApiUrl(),
    method: 'GET',
}, apiToken)

export const getLoadFestivalOptions = (apiToken: string, id: Festival['id']): ApiOptions => enhanceApiOptions({
    url: getFestivalsApiUrl(id),
    method: 'GET',
}, apiToken)

export const getDeleteFestivalOptions = (apiToken: string, id: Festival['id']): ApiOptions => enhanceApiOptions({
    url: getFestivalsApiUrl(id),
    method: 'DELETE',
}, apiToken)

export const getSaveNewFestivalOptions = (apiToken: string, concert: Festival): ApiOptions => (
    enhanceApiOptions({
        url: getFestivalsApiUrl(),
        method: 'POST',
        body: JSON.stringify(concert),
    }, apiToken)
)

export const getSaveFestivalOptions = (apiToken: string, concert: Festival): ApiOptions => (
    enhanceApiOptions({
        url: getFestivalsApiUrl(concert.id),
        method: 'PUT',
        body: JSON.stringify(concert),
    }, apiToken)
)

export const getStatisticsOptions = (apiToken: string): ApiOptions => enhanceApiOptions({
    url: getStatisticsApiUrl(),
    method: 'GET',
}, apiToken)
