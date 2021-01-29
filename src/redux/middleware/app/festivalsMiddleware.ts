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
    addFestivalToState,
    saveFestival,
    saveNewFestival,
    updateFestivalOnState,
} from '../../actions/app/festivals.actions'
import { apiRequest } from '../../actions/core/api.actions'
import { getFestivalsApiUrl } from '../../../api'
import festivalsSelector from '../../selectors/festivalsSelector'
import apiTokenSelector from '../../selectors/apiTokenSelector'

const festivalsMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

    if (isActionOf(saveNewFestival, action)) {
        const festival = action.payload

        dispatch(postFestivalAsync.request(festival))
    }

    if (isActionOf(saveFestival, action)) {
        const festival = action.payload

        dispatch(putFestivalAsync.request(festival))
    }

    if (isActionOf(fetchFestivalsAsync.request, action)) {
        const apiToken = apiTokenSelector(getState())
        const url = getFestivalsApiUrl(apiToken)

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
        const fetchedFestivals = action.payload

        dispatch(setFestivalsState(fetchedFestivals))
    }

    if (isActionOf(fetchFestivalAsync.request, action)) {
        const id = action.payload
        const apiToken = apiTokenSelector(getState())
        const url = getFestivalsApiUrl(apiToken, id)

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
        const fetchedFestival = action.payload
        const festivals = festivalsSelector(getState())
        const festivalExists = festivals.some((festival) => festival.id === fetchedFestival.id)
        const documentAction = festivalExists
            ? updateFestivalOnState(fetchedFestival)
            : addFestivalToState(fetchedFestival)

        dispatch(documentAction)
    }

    if (isActionOf(postFestivalAsync.request, action)) {
        const festival = action.payload
        const apiToken = apiTokenSelector(getState())

        dispatch(apiRequest({
            url: getFestivalsApiUrl(apiToken),
            method: 'POST',
            body: JSON.stringify(festival),
            successAction: postFestivalAsync.success,
            failureAction: postFestivalAsync.failure,
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(postFestivalAsync.success, action)) {
        const postedFestival = action.payload

        dispatch(addFestivalToState(postedFestival))
        dispatch(push('/festivals'))
    }

    if (isActionOf(putFestivalAsync.request, action)) {
        const festival = action.payload
        const apiToken = apiTokenSelector(getState())

        dispatch(apiRequest({
            url: getFestivalsApiUrl(apiToken, festival.id),
            method: 'PUT',
            body: JSON.stringify(festival),
            successAction: putFestivalAsync.success,
            failureAction: putFestivalAsync.failure,
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(putFestivalAsync.success, action)) {
        const savedFestival = action.payload

        dispatch(updateFestivalOnState(savedFestival))
        dispatch(push('/festivals'))
    }

    if (isActionOf(deleteFestivalAsync.request, action)) {
        const festivalId = action.payload
        const apiToken = apiTokenSelector(getState())

        dispatch(apiRequest({
            url: getFestivalsApiUrl(apiToken, festivalId),
            method: 'DELETE',
            successAction: deleteFestivalAsync.success.bind(this, festivalId),
            failureAction: deleteFestivalAsync.failure,
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(deleteFestivalAsync.success, action)) {
        const deletedFestivalId = action.payload

        dispatch(removeFestivalFromState(deletedFestivalId))
    }
}

export default festivalsMiddleware
