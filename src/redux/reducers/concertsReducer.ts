import Concert from '../../entities/Concert.interface'
import { ConcertsAction, ADD_CONCERT } from '../actions/concerts.actions'

type concertsState = Concert[]

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
        default: {
            return state
        }
    }
}

export default concertsReducer
