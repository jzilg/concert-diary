import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
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
    saveConcert, saveNewConcert,
} from '../../actions/app/concerts.actions'
import { apiRequest } from '../../actions/core/api.actions'
import { getConcertsApiUrl } from '../../../api'

const concertsMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(saveNewConcert, action)) {
        const concert = action.payload

        dispatch(postConcertAsync.request(concert))
    }

    if (isActionOf(saveConcert, action)) {
        const concert = action.payload

        dispatch(putConcertAsync.request(concert))
    }

    if (isActionOf(fetchConcertsAsync.request, action)) {
        const url = getConcertsApiUrl()

        dispatch(apiRequest({
            url,
            method: 'GET',
            successAction: fetchConcertsAsync.success,
            failureAction: fetchConcertsAsync.failure,
        }, {
            causedBy: action,
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
            causedBy: action,
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
            causedBy: action,
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
            causedBy: action,
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
            causedBy: action,
        }))
    }

    if (isActionOf(deleteConcertAsync.success, action)) {
        const concertId = action.payload

        dispatch(removeConcertFromState(concertId))
    }
}

export default concertsMiddleware
