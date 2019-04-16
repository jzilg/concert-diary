import Action from '../../interfaces/action.interface'
import Concert, { Concerts, ConcertId } from '../../../entities/Concert.interface'
import API_URL from '../../../constants/api'

export const FETCH_CONCERTS = 'FETCH_CONCERTS'
export const ADD_CONCERTS = 'ADD_CONCERTS'
export const ADD_CONCERT = 'ADD_CONCERT'
export const UPDATE_CONCERT = 'UPDATE_CONCERT'
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

export const updateConcert = (concert: Concert): ConcertsAction => ({
    type: UPDATE_CONCERT,
    payload: {
        concert,
    },
})

export const removeConcert = (concertId: ConcertId): ConcertsAction => ({
    type: REMOVE_CONCERT,
    payload: {
        concertId,
    },
})
