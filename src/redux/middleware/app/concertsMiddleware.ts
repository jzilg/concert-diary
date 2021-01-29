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
    addConcertToState,
    saveConcert, saveNewConcert, updateConcertOnState,
} from '../../actions/app/concerts.actions'
import { apiRequest } from '../../actions/core/api.actions'
import { getConcertsApiUrl } from '../../../api'
import concertsSelector from '../../selectors/concertsSelector'

const concertsMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

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
        const fetchedConcerts = action.payload

        dispatch(setConcertsState(fetchedConcerts))
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
        const fetchedConcert = action.payload
        const concerts = concertsSelector(getState())
        const concertExists = concerts.some((concert) => concert.id === fetchedConcert.id)
        const documentAction = concertExists
            ? updateConcertOnState(fetchedConcert)
            : addConcertToState(fetchedConcert)

        dispatch(documentAction)
    }

    if (isActionOf(postConcertAsync.request, action)) {
        const concert = action.payload

        dispatch(apiRequest({
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
        const postedConcert = action.payload

        dispatch(addConcertToState(postedConcert))
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
        const savedConcert = action.payload

        dispatch(updateConcertOnState(savedConcert))
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
        const deletedConcertId = action.payload

        dispatch(removeConcertFromState(deletedConcertId))
    }
}

export default concertsMiddleware
