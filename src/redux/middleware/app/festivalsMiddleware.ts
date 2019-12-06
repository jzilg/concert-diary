import { Middleware } from 'redux'
import { getType, isActionOf } from 'typesafe-actions'
import {
    fetchFestivalsAsync,
    addFestivalsToState,
    postFestivalAsync,
    putFestivalAsync,
    updateFestivalOnState,
    deleteFestivalAsync,
    removeFestivalFromState, addFestivalToState,
} from '../../actions/app/festivals.actions'
import { apiRequest } from '../../actions/core/api.actions'

const festivalsMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(fetchFestivalsAsync.request, action)) {
        dispatch(apiRequest({
            url: `${process.env.API_URL}/festivals`,
            method: 'GET',
            successAction: fetchFestivalsAsync.success,
            failureAction: fetchFestivalsAsync.failure,
        }, getType(fetchFestivalsAsync.request)))
    }

    if (isActionOf(fetchFestivalsAsync.success, action)) {
        const festivals = action.payload

        dispatch(addFestivalsToState(festivals))
    }

    if (isActionOf(postFestivalAsync.request, action)) {
        const festival = action.payload

        next(apiRequest({
            url: `${process.env.API_URL}/festivals`,
            method: 'POST',
            body: JSON.stringify(festival),
            successAction: postFestivalAsync.success,
            failureAction: postFestivalAsync.failure,
        }, getType(postFestivalAsync.request)))
    }

    if (isActionOf(postFestivalAsync.success, action)) {
        const festival = action.payload

        dispatch(addFestivalToState(festival))
    }

    if (isActionOf(putFestivalAsync.request, action)) {
        const festival = action.payload

        dispatch(apiRequest({
            url: `${process.env.API_URL}/festivals/${festival.id}`,
            method: 'PUT',
            body: JSON.stringify(festival),
            successAction: putFestivalAsync.success,
            failureAction: putFestivalAsync.failure,
        }, getType(putFestivalAsync.request)))
    }

    if (isActionOf(putFestivalAsync.success, action)) {
        const festival = action.payload

        dispatch(updateFestivalOnState(festival))
    }

    if (isActionOf(deleteFestivalAsync.request, action)) {
        const festivalId = action.payload

        dispatch(apiRequest({
            url: `${process.env.API_URL}/festivals/${festivalId}`,
            method: 'DELETE',
            successAction: deleteFestivalAsync.success.bind(this, festivalId),
            failureAction: deleteFestivalAsync.failure,
        }, getType(deleteFestivalAsync.request)))
    }

    if (isActionOf(deleteFestivalAsync.success, action)) {
        const festivalId = action.payload

        dispatch(removeFestivalFromState(festivalId))
    }
}

export default festivalsMiddleware
