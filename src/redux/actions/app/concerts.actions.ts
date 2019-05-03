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

export interface ConcertsAction extends Action {
    payload?: {
        concert?: Concert
        concerts?: Concerts
        concertId?: ConcertId
    }
}

export const addConcertsToState = (concerts: Concerts): ConcertsAction => ({
    type: ADD_CONCERTS_TO_STATE,
    feature: CONCERTS,
    payload: {
        concerts,
    },
})

export const fetchConcerts = (): ConcertsAction => ({
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

export const addConcertToState = (concert: Concert): ConcertsAction => ({
    type: ADD_CONCERT_TO_STATE,
    feature: CONCERT,
    payload: {
        concert,
    },
})

export const postConcert = (concert: Concert): ConcertsAction => ({
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

export const updateConcertOnState = (concert: Concert): ConcertsAction => ({
    type: UPDATE_CONCERT_ON_STATE,
    feature: CONCERT,
    payload: {
        concert,
    },
})

export const putConcert = (concert: Concert): ConcertsAction => ({
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

export const removeConcertFromState = (concertId: ConcertId): ConcertsAction => ({
    type: REMOVE_CONCERT_FROM_STATE,
    feature: CONCERT,
    payload: {
        concertId,
    },
})

export const deleteConcert = (concertId: ConcertId): ConcertsAction => ({
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
