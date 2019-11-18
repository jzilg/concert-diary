import { Concerts } from '../../entities/Concert'
import {
    ConcertsAction,
    ADD_CONCERTS_TO_STATE,
    UPDATE_CONCERT_ON_STATE,
    REMOVE_CONCERT_FROM_STATE,
} from '../actions/app/concerts.actions'

export type ConcertsState = Concerts

export const defaultState: ConcertsState = []

function concertsReducer(
    state: ConcertsState = defaultState,
    action: ConcertsAction,
): ConcertsState {
    switch (action.type) {
        case ADD_CONCERTS_TO_STATE: {
            return state.concat(action.payload.concerts)
        }
        case UPDATE_CONCERT_ON_STATE: {
            return state.map((concertFromState) => {
                const isConcertToUpdate = concertFromState.id === action.payload.concert.id
                return isConcertToUpdate ? action.payload.concert : concertFromState
            })
        }
        case REMOVE_CONCERT_FROM_STATE: {
            return state.filter((concert) => concert.id !== action.payload.concertId)
        }
        default: {
            return state
        }
    }
}

export default concertsReducer
