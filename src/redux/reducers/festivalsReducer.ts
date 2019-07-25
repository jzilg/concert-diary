import { Festivals } from '../../entities/Festival.interface'
import {
    FestivalsAction,
    ADD_FESTIVALS_TO_STATE,
    UPDATE_FESTIVAL_ON_STATE,
    REMOVE_FESTIVAL_FROM_STATE,
} from '../actions/app/festivals.actions'

export type FestivalsState = Festivals

export const defaultState: FestivalsState = []

function festivalsReducer(
    state: FestivalsState = defaultState,
    action: FestivalsAction,
): FestivalsState {
    switch (action.type) {
        case ADD_FESTIVALS_TO_STATE: {
            return state.concat(action.payload.festivals)
        }
        case UPDATE_FESTIVAL_ON_STATE: {
            return state.map((festivalFromState) => {
                const isFestivalToUpdate = festivalFromState.id === action.payload.festival.id
                return isFestivalToUpdate ? action.payload.festival : festivalFromState
            })
        }
        case REMOVE_FESTIVAL_FROM_STATE: {
            return state.filter(festival => festival.id !== action.payload.festivalId)
        }
        default: {
            return state
        }
    }
}

export default festivalsReducer
