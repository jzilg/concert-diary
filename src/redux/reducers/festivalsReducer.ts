import { createReducer } from 'typesafe-actions'
import type Festival from '../../entities/Festival'
import {
    setFestivalsState,
    addFestivalToState,
    removeFestivalFromState,
    updateFestivalOnState,
} from '../actions/app/festivals.actions'

export type FestivalsState = Festival[]

export const defaultState: FestivalsState = []

const festivalsReducer = createReducer(defaultState)
    .handleAction(setFestivalsState, (state, action) => action.payload)
    .handleAction(addFestivalToState, (state, action) => state.concat(action.payload))
    .handleAction(updateFestivalOnState, (state, action) => (
        state.map((festival) => (festival.id === action.payload.id ? action.payload : festival))
    ))
    .handleAction(removeFestivalFromState, (state, action) => (
        state.filter((festival) => festival.id !== action.payload)
    ))

export default festivalsReducer
