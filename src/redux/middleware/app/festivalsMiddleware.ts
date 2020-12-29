import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import { push } from 'connected-react-router'
import {
    fetchFestivalAsync,
    fetchFestivalsAsync,
    setFestivalsState,
    postFestivalAsync,
    putFestivalAsync,
    deleteFestivalAsync,
    removeFestivalFromState,
    setFestivalOnState,
    saveFestival,
    saveNewFestival,
} from '../../actions/app/festivals.actions'
import { apiRequest } from '../../actions/core/api.actions'
import { getFestivalsApiUrl } from '../../../api'

const festivalsMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(saveNewFestival, action)) {
        const festival = action.payload

        dispatch(postFestivalAsync.request(festival))
    }

    if (isActionOf(saveFestival, action)) {
        const festival = action.payload

        dispatch(putFestivalAsync.request(festival))
    }

    if (isActionOf(fetchFestivalsAsync.request, action)) {
        const url = getFestivalsApiUrl()

        dispatch(apiRequest({
            url,
            method: 'GET',
            successAction: fetchFestivalsAsync.success,
            failureAction: fetchFestivalsAsync.failure,
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(fetchFestivalsAsync.success, action)) {
        const festivals = action.payload

        dispatch(setFestivalsState(festivals))
    }

    if (isActionOf(fetchFestivalAsync.request, action)) {
        const id = action.payload
        const url = getFestivalsApiUrl(id)

        dispatch(apiRequest({
            url,
            method: 'GET',
            successAction: fetchFestivalAsync.success,
            failureAction: fetchFestivalAsync.failure,
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(fetchFestivalAsync.success, action)) {
        const festival = action.payload

        dispatch(setFestivalOnState(festival))
    }

    if (isActionOf(postFestivalAsync.request, action)) {
        const festival = action.payload

        dispatch(apiRequest({
            url: getFestivalsApiUrl(),
            method: 'POST',
            body: JSON.stringify(festival),
            successAction: postFestivalAsync.success,
            failureAction: postFestivalAsync.failure,
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(postFestivalAsync.success, action)) {
        const festival = action.payload

        dispatch(setFestivalOnState(festival))
        dispatch(push('/festivals'))
    }

    if (isActionOf(putFestivalAsync.request, action)) {
        const festival = action.payload

        dispatch(apiRequest({
            url: getFestivalsApiUrl(festival.id),
            method: 'PUT',
            body: JSON.stringify(festival),
            successAction: putFestivalAsync.success,
            failureAction: putFestivalAsync.failure,
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(putFestivalAsync.success, action)) {
        const festival = action.payload

        dispatch(setFestivalOnState(festival))
        dispatch(push('/festivals'))
    }

    if (isActionOf(deleteFestivalAsync.request, action)) {
        const festivalId = action.payload

        dispatch(apiRequest({
            url: getFestivalsApiUrl(festivalId),
            method: 'DELETE',
            successAction: deleteFestivalAsync.success.bind(this, festivalId),
            failureAction: deleteFestivalAsync.failure,
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(deleteFestivalAsync.success, action)) {
        const festivalId = action.payload

        dispatch(removeFestivalFromState(festivalId))
    }
}

export default festivalsMiddleware
