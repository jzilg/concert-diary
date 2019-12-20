import { createReducer } from 'typesafe-actions'
import { Concerts } from '../../entities/Concert'
import {
    setConcertsState,
    addConcertToState,
    updateConcertOnState,
    removeConcertFromState,
} from '../actions/app/concerts.actions'

export type ConcertsState = Concerts

export const defaultState: ConcertsState = []

const concertsReducer = createReducer(defaultState)
    .handleAction(
        setConcertsState,
        (state, action) => action.payload,
    )
    .handleAction(
        addConcertToState,
        (state, action) => state.concat(action.payload),
    )
    .handleAction(
        updateConcertOnState,
        (state, action) => state.map((concertFromState) => {
            const concert = action.payload
            const isConcertToUpdate = concertFromState.id === concert.id

            return isConcertToUpdate ? concert : concertFromState
        }),
    )
    .handleAction(
        removeConcertFromState,
        (state, action) => state.filter((concertFromState) => {
            const concertId = action.payload

            return concertFromState.id !== concertId
        }),
    )

export default concertsReducer
