import { createReducer } from 'typesafe-actions'
import Concert from '../../entities/Concert'
import {
    setConcertsState,
    setConcertOnState,
    removeConcertFromState,
} from '../actions/app/concerts.actions'

export type ConcertsState = Record<Concert['id'], Concert>

export const defaultState: ConcertsState = {}

const concertsReducer = createReducer(defaultState)
    .handleAction(setConcertsState, (state, action) => {
        const concerts = action.payload
        const newState = {}

        concerts.forEach((concert) => {
            newState[concert.id] = concert
        })

        return newState
    })
    .handleAction(setConcertOnState, (state, action) => {
        const concert = action.payload

        return {
            ...state,
            [concert.id]: concert,
        }
    })
    .handleAction(removeConcertFromState, (state, action) => {
        const concertId = action.payload
        const newState = {
            ...state,
        }

        delete newState[concertId]

        return newState
    })

export default concertsReducer
