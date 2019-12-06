import { Middleware } from 'redux'
import { getType, isActionOf } from 'typesafe-actions'
import {
    fetchConcertsAsync,
    addConcertsToState,
    postConcertAsync,
    putConcertAsync,
    updateConcertOnState,
    deleteConcertAsync,
    removeConcertFromState, addConcertToState,
} from '../../actions/app/concerts.actions'
import { apiRequest } from '../../actions/core/api.actions'

const concertsMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(fetchConcertsAsync.request, action)) {
        dispatch(apiRequest({
            url: `${process.env.API_URL}/concerts`,
            method: 'GET',
            successAction: fetchConcertsAsync.success,
            failureAction: fetchConcertsAsync.failure,
        }, getType(fetchConcertsAsync.request)))
    }

    if (isActionOf(fetchConcertsAsync.success, action)) {
        const concerts = action.payload

        dispatch(addConcertsToState(concerts))
    }

    if (isActionOf(postConcertAsync.request, action)) {
        const concert = action.payload

        next(apiRequest({
            url: `${process.env.API_URL}/concerts`,
            method: 'POST',
            body: JSON.stringify(concert),
            successAction: postConcertAsync.success,
            failureAction: postConcertAsync.failure,
        }, getType(postConcertAsync.request)))
    }

    if (isActionOf(postConcertAsync.success, action)) {
        const concert = action.payload

        dispatch(addConcertToState(concert))
    }

    if (isActionOf(putConcertAsync.request, action)) {
        const concert = action.payload

        dispatch(apiRequest({
            url: `${process.env.API_URL}/concerts/${concert.id}`,
            method: 'PUT',
            body: JSON.stringify(concert),
            successAction: putConcertAsync.success,
            failureAction: putConcertAsync.failure,
        }, getType(putConcertAsync.request)))
    }

    if (isActionOf(putConcertAsync.success, action)) {
        const concert = action.payload

        dispatch(updateConcertOnState(concert))
    }

    if (isActionOf(deleteConcertAsync.request, action)) {
        const concertId = action.payload

        dispatch(apiRequest({
            url: `${process.env.API_URL}/concerts/${concertId}`,
            method: 'DELETE',
            successAction: deleteConcertAsync.success.bind(this, concertId),
            failureAction: deleteConcertAsync.failure,
        }, getType(deleteConcertAsync.request)))
    }

    if (isActionOf(deleteConcertAsync.success, action)) {
        const concertId = action.payload

        dispatch(removeConcertFromState(concertId))
    }
}

export default concertsMiddleware
