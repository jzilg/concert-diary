import Action from '../../interfaces/action.interface'
import Concert, { Concerts, ConcertId } from '../../../entities/Concert.interface'
import API_URL from '../../../constants/api'

export const FETCH_CONCERTS = 'FETCH_CONCERTS'
export const ADD_CONCERTS = 'ADD_CONCERTS'
export const POST_CONCERT = 'POST_CONCERT'
export const ADD_CONCERT = 'ADD_CONCERT'
export const PUT_CONCERT = 'PUT_CONCERT'
export const UPDATE_CONCERT = 'UPDATE_CONCERT'
export const DELETE_CONCERT = 'DELETE_CONCERT'
export const REMOVE_CONCERT = 'REMOVE_CONCERT'

export interface ConcertsAction extends Action {
    payload?: {
        concert?: Concert
        concerts?: Concerts
        concertId?: ConcertId
    }
}

export const addConcerts = (concerts: Concerts): ConcertsAction => ({
    type: ADD_CONCERTS,
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
            successAction: addConcerts,
        },
    },
})

export const addConcert = (concert: Concert): ConcertsAction => ({
    type: ADD_CONCERT,
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
            successAction: addConcert,
        },
    },
})

export const updateConcert = (concert: Concert): ConcertsAction => ({
    type: UPDATE_CONCERT,
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
            successAction: updateConcert,
        },
    },
})

export const removeConcert = (concertId: ConcertId): ConcertsAction => ({
    type: REMOVE_CONCERT,
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
            successAction: removeConcert.bind(this, concertId),
        },
    },
})
