import { Concerts } from '../../entities/Concert.interface'
import { ConcertsAction, ADD_CONCERT, UPDATE_CONCERT } from '../actions/concerts.actions'

type concertsState = Concerts

export const defaultState: concertsState = []

function concertsReducer(
    state: concertsState = defaultState,
    action: ConcertsAction,
): concertsState {
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
        default: {
            return state
        }
    }
}

export default concertsReducer
