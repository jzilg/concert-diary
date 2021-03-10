import Concert from '../entities/Concert'
import Festival from '../entities/Festival'
import ApiRequest from '../entities/ApiRequest'
import enhanceApiOptions from './enhanceApiOptions'

const { API_URL } = process.env

const getAuthApiUrl = (): string => `${process.env.API_URL}/login`

const getConcertsApiUrl = (apiToken: string, id?: Concert['id']): string => {
    const path = id !== undefined
        ? `/concerts/${id}`
        : '/concerts'

    return `${API_URL}${path}?api_token=${apiToken}`
}

const getFestivalsApiUrl = (apiToken: string, id?: Festival['id']): string => {
    const path = id !== undefined
        ? `/festivals/${id}`
        : '/festivals'

    return `${API_URL}${path}?api_token=${apiToken}`
}

const getStatisticsApiUrl = (apiToken: string): string => `${API_URL}/statistics?api_token=${apiToken}`

export const getLoginOptions = (data: unknown) : ApiRequest => enhanceApiOptions({
    url: getAuthApiUrl(),
    method: 'POST',
    body: JSON.stringify(data),
})

export const getLoadAllConcertsOptions = (apiToken: string): ApiRequest => enhanceApiOptions({
    url: getConcertsApiUrl(apiToken),
    method: 'GET',
})

export const getLoadConcertOptions = (apiToken: string, id: Concert['id']): ApiRequest => enhanceApiOptions({
    url: getConcertsApiUrl(apiToken, id),
    method: 'GET',
})

export const getDeleteConcertOptions = (apiToken: string, id: Concert['id']): ApiRequest => enhanceApiOptions({
    url: getConcertsApiUrl(apiToken, id),
    method: 'DELETE',
})

export const getSaveNewConcertOptions = (apiToken: string, concert: Concert): ApiRequest => (
    enhanceApiOptions({
        url: getConcertsApiUrl(apiToken),
        method: 'POST',
        body: JSON.stringify(concert),
    })
)

export const getSaveConcertOptions = (apiToken: string, concert: Concert): ApiRequest => (
    enhanceApiOptions({
        url: getConcertsApiUrl(apiToken, concert.id),
        method: 'PUT',
        body: JSON.stringify(concert),
    })
)

export const getLoadAllFestivalsOptions = (apiToken: string): ApiRequest => enhanceApiOptions({
    url: getFestivalsApiUrl(apiToken),
    method: 'GET',
})

export const getLoadFestivalOptions = (apiToken: string, id: Festival['id']): ApiRequest => enhanceApiOptions({
    url: getFestivalsApiUrl(apiToken, id),
    method: 'GET',
})

export const getDeleteFestivalOptions = (apiToken: string, id: Festival['id']): ApiRequest => enhanceApiOptions({
    url: getFestivalsApiUrl(apiToken, id),
    method: 'DELETE',
})

export const getSaveNewFestivalOptions = (apiToken: string, concert: Festival): ApiRequest => (
    enhanceApiOptions({
        url: getFestivalsApiUrl(apiToken),
        method: 'POST',
        body: JSON.stringify(concert),
    })
)

export const getSaveFestivalOptions = (apiToken: string, concert: Festival): ApiRequest => (
    enhanceApiOptions({
        url: getFestivalsApiUrl(apiToken, concert.id),
        method: 'PUT',
        body: JSON.stringify(concert),
    })
)

export const getStatisticsOptions = (apiToken: string): ApiRequest => enhanceApiOptions({
    url: getStatisticsApiUrl(apiToken),
    method: 'GET',
})
