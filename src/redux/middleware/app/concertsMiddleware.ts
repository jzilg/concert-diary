import { Middleware } from 'redux'
import { getType, isActionOf } from 'typesafe-actions'
import { push } from 'connected-react-router'
import {
    fetchConcertAsync,
    fetchConcertsAsync,
    setConcertsState,
    postConcertAsync,
    putConcertAsync,
    deleteConcertAsync,
    removeConcertFromState,
    setConcertOnState,
    saveConcert,
} from '../../actions/app/concerts.actions'
import { apiRequest } from '../../actions/core/api.actions'
import concertExistsSelector from '../../selectors/concertExistsSelector'
import { getConcertsApiUrl } from '../../../api'

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
        const url = getConcertsApiUrl()

        dispatch(apiRequest({
            url,
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

    if (isActionOf(fetchConcertAsync.request, action)) {
        const id = action.payload
        const url = getConcertsApiUrl(id)

        dispatch(apiRequest({
            url,
            method: 'GET',
            successAction: fetchConcertAsync.success,
            failureAction: fetchConcertAsync.failure,
        }, {
            causedBy: getType(fetchConcertAsync.request),
        }))
    }

    if (isActionOf(fetchConcertAsync.success, action)) {
        const concert = action.payload

        dispatch(setConcertOnState(concert))
    }

    if (isActionOf(postConcertAsync.request, action)) {
        const concert = action.payload

        next(apiRequest({
            url: getConcertsApiUrl(),
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

        dispatch(setConcertOnState(concert))
        dispatch(push('/concerts'))
    }

    if (isActionOf(putConcertAsync.request, action)) {
        const concert = action.payload

        dispatch(apiRequest({
            url: getConcertsApiUrl(concert.id),
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

        dispatch(setConcertOnState(concert))
        dispatch(push('/concerts'))
    }

    if (isActionOf(deleteConcertAsync.request, action)) {
        const concertId = action.payload

        dispatch(apiRequest({
            url: getConcertsApiUrl(concertId),
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
