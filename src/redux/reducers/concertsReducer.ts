import { Concerts } from '../../entities/Concert.interface'
import {
    ConcertsAction,
    ADD_CONCERT_TO_STATE,
    UPDATE_CONCERT_ON_STATE,
    REMOVE_CONCERT_FROM_STATE,
    ADD_CONCERTS_TO_STATE,
} from '../actions/app/concerts.actions'

export type ConcertsState = Concerts

export const defaultState: ConcertsState = []

function concertsReducer(
    state: ConcertsState = defaultState,
    action: ConcertsAction,
): ConcertsState {
    switch (action.type) {
        case ADD_CONCERTS_TO_STATE: {
            return [
                ...state,
                ...action.payload.concerts,
            ]
        }
        case ADD_CONCERT_TO_STATE: {
            return [
                ...state,
                action.payload.concert,
            ]
        }
        case UPDATE_CONCERT_ON_STATE: {
            return state.map((concertFromState) => {
                const isConcertToUpdate = concertFromState.id === action.payload.concert.id
                return isConcertToUpdate ? action.payload.concert : concertFromState
            })
        }
        case REMOVE_CONCERT_FROM_STATE: {
            return state.filter(concert => concert.id !== action.payload.concertId)
        }
        default: {
            return state
        }
    }
}

export default concertsReducer
