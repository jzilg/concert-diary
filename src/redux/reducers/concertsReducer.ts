import { Concerts } from '../../entities/Concert.interface'
import {
    ConcertsAction,
    ADD_CONCERT,
    UPDATE_CONCERT,
    REMOVE_CONCERT,
} from '../actions/concerts.actions'

export type ConcertsState = Concerts

export const defaultState: ConcertsState = []

function concertsReducer(
    state: ConcertsState = defaultState,
    action: ConcertsAction,
): ConcertsState {
    switch (action.type) {
        case ADD_CONCERT: {
            return [
                ...state,
                action.payload.concert,
            ]
        }
        case UPDATE_CONCERT: {
            const updatedConcerts = state.map((concertFromState) => {
                const isConcertToUpdate = concertFromState.id === action.payload.concert.id
                return isConcertToUpdate ? action.payload.concert : concertFromState
            })
            return updatedConcerts
        }
        case REMOVE_CONCERT: {
            return state.filter(concert => concert.id !== action.payload.concertId)
        }
        default: {
            return state
        }
    }
}

export default concertsReducer
