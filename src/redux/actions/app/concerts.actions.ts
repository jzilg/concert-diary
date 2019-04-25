import Action from '../../interfaces/action.interface'
import Concert, { Concerts, ConcertId } from '../../../entities/Concert.interface'
import API_URL from '../../../constants/api'

export const FETCH_CONCERTS = '[CMD] FETCH_CONCERTS'
export const ADD_CONCERTS_TO_STATE = '[STATE] ADD_CONCERTS_TO_STATE'
export const POST_CONCERT = '[CMD] POST_CONCERT'
export const ADD_CONCERT_TO_STATE = '[STATE] ADD_CONCERT_TO_STATE'
export const PUT_CONCERT = '[CMD] PUT_CONCERT'
export const UPDATE_CONCERT_ON_STATE = '[STATE] UPDATE_CONCERT_ON_STATE'
export const DELETE_CONCERT = '[CMD] DELETE_CONCERT'
export const REMOVE_CONCERT_FROM_STATE = '[STATE] REMOVE_CONCERT_FROM_STATE'

export interface ConcertsAction extends Action {
    payload?: {
        concert?: Concert
        concerts?: Concerts
        concertId?: ConcertId
    }
}

export const addConcertsToState = (concerts: Concerts): ConcertsAction => ({
    type: ADD_CONCERTS_TO_STATE,
    payload: {
        concerts,
    },
})

export const fetchConcerts = (): ConcertsAction => ({
    type: FETCH_CONCERTS,
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
    payload: {
        concert,
    },
})

export const postConcert = (concert: Concert): ConcertsAction => ({
    type: POST_CONCERT,
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
    payload: {
        concert,
    },
})

export const putConcert = (concert: Concert): ConcertsAction => ({
    type: PUT_CONCERT,
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
    payload: {
        concertId,
    },
})

export const deleteConcert = (concertId: ConcertId): ConcertsAction => ({
    type: DELETE_CONCERT,
    meta: {
        api: {
            url: `${API_URL}/concerts/${concertId}`,
            method: 'DELETE',
            successAction: removeConcertFromState.bind(this, concertId),
        },
    },
})
