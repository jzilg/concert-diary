import { createReducer } from 'typesafe-actions'
import Concert from '../../entities/Concert'
import {
    setConcertsState,
    addConcertToState,
    removeConcertFromState,
} from '../actions/app/concerts.actions'

export type ConcertsState = Concert[]

export const defaultState: ConcertsState = []

const concertsReducer = createReducer(defaultState)
    .handleAction(setConcertsState, (state, action) => action.payload)
    .handleAction(addConcertToState, (state, action) => state.concat(action.payload))
    .handleAction(removeConcertFromState, (state, action) => (
        state.filter((concert) => concert.id !== action.payload)
    ))

export default concertsReducer
