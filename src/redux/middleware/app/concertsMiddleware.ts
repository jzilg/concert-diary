import { Middleware } from 'redux'
import { getType, isActionOf } from 'typesafe-actions'
import { push } from 'connected-react-router'
import {
    fetchConcertsAsync,
    setConcertsState,
    postConcertAsync,
    putConcertAsync,
    updateConcertOnState,
    deleteConcertAsync,
    removeConcertFromState,
    addConcertToState,
    saveConcert,
} from '../../actions/app/concerts.actions'
import { apiRequest } from '../../actions/core/api.actions'
import concertExistsSelector from '../../selectors/concertExistsSelector'

const concertsMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

    if (isActionOf(saveConcert, action)) {
        const state = getState()
        const concert = action.payload
        const concertExist = concertExistsSelector(state)

        const saveAction = concertExist
            ? putConcertAsync.request(concert)
            : postConcertAsync.request(concert)

        dispatch(saveAction)
    }

    if (isActionOf(fetchConcertsAsync.request, action)) {
        dispatch(apiRequest({
            url: `${process.env.API_URL}/concerts`,
            method: 'GET',
            successAction: fetchConcertsAsync.success,
            failureAction: fetchConcertsAsync.failure,
        }, {
            causedBy: getType(fetchConcertsAsync.request),
        }))
    }

    if (isActionOf(fetchConcertsAsync.success, action)) {
        const concerts = action.payload

        dispatch(setConcertsState(concerts))
    }

    if (isActionOf(postConcertAsync.request, action)) {
        const concert = action.payload

        next(apiRequest({
            url: `${process.env.API_URL}/concerts`,
            method: 'POST',
            body: JSON.stringify(concert),
            successAction: postConcertAsync.success,
            failureAction: postConcertAsync.failure,
        }, {
            causedBy: getType(postConcertAsync.request),
        }))
    }

    if (isActionOf(postConcertAsync.success, action)) {
        const concert = action.payload

        dispatch(addConcertToState(concert))
        dispatch(push('/concerts'))
    }

    if (isActionOf(putConcertAsync.request, action)) {
        const concert = action.payload

        dispatch(apiRequest({
            url: `${process.env.API_URL}/concerts/${concert.id}`,
            method: 'PUT',
            body: JSON.stringify(concert),
            successAction: putConcertAsync.success,
            failureAction: putConcertAsync.failure,
        }, {
            causedBy: getType(putConcertAsync.request),
        }))
    }

    if (isActionOf(putConcertAsync.success, action)) {
        const concert = action.payload

        dispatch(updateConcertOnState(concert))
        dispatch(push('/concerts'))
    }

    if (isActionOf(deleteConcertAsync.request, action)) {
        const concertId = action.payload

        dispatch(apiRequest({
            url: `${process.env.API_URL}/concerts/${concertId}`,
            method: 'DELETE',
            successAction: deleteConcertAsync.success.bind(this, concertId),
            failureAction: deleteConcertAsync.failure,
        }, {
            causedBy: getType(deleteConcertAsync.request),
        }))
    }

    if (isActionOf(deleteConcertAsync.success, action)) {
        const concertId = action.payload

        dispatch(removeConcertFromState(concertId))
    }
}

export default concertsMiddleware
