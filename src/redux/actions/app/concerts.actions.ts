import Action from '../../interfaces/action.interface'
import Concert, { Concerts, ConcertId } from '../../../entities/Concert.interface'
import API_URL from '../../../constants/api'

const CONCERTS = '[CONCERTS]'
const CONCERT = '[CONCERT]'

export const FETCH_CONCERTS = `${CONCERTS} FETCH`
export const ADD_CONCERTS_TO_STATE = `${CONCERTS} ADD_TO_STATE`
export const POST_CONCERT = `${CONCERT} POST`
export const ADD_CONCERT_TO_STATE = `${CONCERT} ADD_TO_STATE`
export const PUT_CONCERT = `${CONCERT} PUT`
export const UPDATE_CONCERT_ON_STATE = `${CONCERT} UPDATE_ON_STATE`
export const DELETE_CONCERT = `${CONCERT} DELETE`
export const REMOVE_CONCERT_FROM_STATE = `${CONCERT} REMOVE_FROM_STATE`

interface ConcertsPayload {
    concerts: Concerts
}

interface ConcertPayload {
    concert: Concert
}

interface ConcertIdPayload {
    concertId: ConcertId
}

interface ConcertsPayloads extends ConcertsPayload, ConcertPayload, ConcertIdPayload {}
export type ConcertsAction = Action<ConcertsPayloads>

export const addConcertsToState = (concerts: Concerts): Action<ConcertsPayload> => ({
    type: ADD_CONCERTS_TO_STATE,
    feature: CONCERTS,
    payload: {
        concerts,
    },
})

export const fetchConcerts = (): Action => ({
    type: FETCH_CONCERTS,
    feature: CONCERTS,
    meta: {
        api: {
            url: `${API_URL}/concerts`,
            method: 'GET',
            successAction: addConcertsToState,
        },
    },
})

export const addConcertToState = (concert: Concert): Action<ConcertPayload> => ({
    type: ADD_CONCERT_TO_STATE,
    feature: CONCERT,
    payload: {
        concert,
    },
})

export const postConcert = (concert: Concert): Action => ({
    type: POST_CONCERT,
    feature: CONCERT,
    meta: {
        api: {
            url: `${API_URL}/concerts`,
            method: 'POST',
            body: JSON.stringify(concert),
            successAction: addConcertToState,
        },
    },
})

export const updateConcertOnState = (concert: Concert): Action<ConcertPayload> => ({
    type: UPDATE_CONCERT_ON_STATE,
    feature: CONCERT,
    payload: {
        concert,
    },
})

export const putConcert = (concert: Concert): Action => ({
    type: PUT_CONCERT,
    feature: CONCERT,
    meta: {
        api: {
            url: `${API_URL}/concerts/${concert.id}`,
            method: 'PUT',
            body: JSON.stringify(concert),
            successAction: updateConcertOnState,
        },
    },
})

export const removeConcertFromState = (concertId: ConcertId): Action<ConcertIdPayload> => ({
    type: REMOVE_CONCERT_FROM_STATE,
    feature: CONCERT,
    payload: {
        concertId,
    },
})

export const deleteConcert = (concertId: ConcertId): Action => ({
    type: DELETE_CONCERT,
    feature: CONCERT,
    meta: {
        api: {
            url: `${API_URL}/concerts/${concertId}`,
            method: 'DELETE',
            successAction: removeConcertFromState.bind(this, concertId),
        },
    },
})
