import { createReducer } from 'typesafe-actions'
import { Festivals } from '../../entities/Festival'
import {
    setFestivalsState,
    addFestivalToState,
    updateFestivalOnState,
    removeFestivalFromState,
} from '../actions/app/festivals.actions'

export type FestivalsState = Festivals

export const defaultState: FestivalsState = []

const festivalsReducer = createReducer(defaultState)
    .handleAction(
        setFestivalsState,
        (state, action) => action.payload,
    )
    .handleAction(
        addFestivalToState,
        (state, action) => state.concat(action.payload),
    )
    .handleAction(
        updateFestivalOnState,
        (state, action) => state.map((festivalFromState) => {
            const festival = action.payload
            const isFestivalToUpdate = festivalFromState.id === festival.id

            return isFestivalToUpdate ? festival : festivalFromState
        }),
    )
    .handleAction(
        removeFestivalFromState,
        (state, action) => state.filter((festivalFromState) => {
            const festivalId = action.payload

            return festivalFromState.id !== festivalId
        }),
    )

export default festivalsReducer
