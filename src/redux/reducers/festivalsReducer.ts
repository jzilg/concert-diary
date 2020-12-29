import { createReducer } from 'typesafe-actions'
import Festival from '../../entities/Festival'
import {
    setFestivalsState,
    setFestivalOnState,
    removeFestivalFromState,
} from '../actions/app/festivals.actions'

export type FestivalsState = Record<Festival['id'], Festival>

export const defaultState: FestivalsState = {}

const festivalsReducer = createReducer(defaultState)
    .handleAction(setFestivalsState, (state, action) => {
        const festivals = action.payload
        const newState = {}

        festivals.forEach((festival) => {
            newState[festival.id] = festival
        })

        return newState
    })
    .handleAction(setFestivalOnState, (state, action) => {
        const festival = action.payload

        return {
            ...state,
            [festival.id]: festival,
        }
    })
    .handleAction(removeFestivalFromState, (state, action) => {
        const festivalId = action.payload
        const newState = {
            ...state,
        }

        delete newState[festivalId]

        return newState
    })

export default festivalsReducer
