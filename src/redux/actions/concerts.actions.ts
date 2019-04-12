import Action from '../interfaces/action.interface'
import Concert, { ConcertId } from '../../entities/Concert.interface'

export const ADD_CONCERT = 'ADD_CONCERT'
export const UPDATE_CONCERT = 'UPDATE_CONCERT'
export const REMOVE_CONCERT = 'REMOVE_CONCERT'

export interface ConcertsAction extends Action {
    payload: {
        concert?: Concert
        concertId?: ConcertId
    }
}

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
