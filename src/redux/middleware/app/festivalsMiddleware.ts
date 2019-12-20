import { Middleware } from 'redux'
import { getType, isActionOf } from 'typesafe-actions'
import { push } from 'connected-react-router'
import {
    fetchFestivalsAsync,
    setFestivalsState,
    postFestivalAsync,
    putFestivalAsync,
    updateFestivalOnState,
    deleteFestivalAsync,
    removeFestivalFromState,
    addFestivalToState,
    saveFestival,
} from '../../actions/app/festivals.actions'
import { apiRequest } from '../../actions/core/api.actions'
import festivalExistsSelector from '../../selectors/festivalExistsSelector'

const festivalsMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

    if (isActionOf(saveFestival, action)) {
        const state = getState()
        const festival = action.payload
        const festivalExist = festivalExistsSelector(state)

        const saveAction = festivalExist
            ? putFestivalAsync.request(festival)
            : postFestivalAsync.request(festival)

        dispatch(saveAction)
    }

    if (isActionOf(fetchFestivalsAsync.request, action)) {
        const id = action.payload
        const url = id !== undefined
            ? `${process.env.API_URL}/festivals?id=${id}`
            : `${process.env.API_URL}/festivals`

        dispatch(apiRequest({
            url,
            method: 'GET',
            successAction: fetchFestivalsAsync.success,
            failureAction: fetchFestivalsAsync.failure,
        }, {
            causedBy: getType(fetchFestivalsAsync.request),
        }))
    }

    if (isActionOf(fetchFestivalsAsync.success, action)) {
        const festivals = action.payload

        dispatch(setFestivalsState(festivals))
    }

    if (isActionOf(postFestivalAsync.request, action)) {
        const festival = action.payload

        next(apiRequest({
            url: `${process.env.API_URL}/festivals`,
            method: 'POST',
            body: JSON.stringify(festival),
            successAction: postFestivalAsync.success,
            failureAction: postFestivalAsync.failure,
        }, {
            causedBy: getType(postFestivalAsync.request),
        }))
    }

    if (isActionOf(postFestivalAsync.success, action)) {
        const festival = action.payload

        dispatch(addFestivalToState(festival))
        dispatch(push('/festivals'))
    }

    if (isActionOf(putFestivalAsync.request, action)) {
        const festival = action.payload

        dispatch(apiRequest({
            url: `${process.env.API_URL}/festivals/${festival.id}`,
            method: 'PUT',
            body: JSON.stringify(festival),
            successAction: putFestivalAsync.success,
            failureAction: putFestivalAsync.failure,
        }, {
            causedBy: getType(putFestivalAsync.request),
        }))
    }

    if (isActionOf(putFestivalAsync.success, action)) {
        const festival = action.payload

        dispatch(updateFestivalOnState(festival))
        dispatch(push('/festivals'))
    }

    if (isActionOf(deleteFestivalAsync.request, action)) {
        const festivalId = action.payload

        dispatch(apiRequest({
            url: `${process.env.API_URL}/festivals/${festivalId}`,
            method: 'DELETE',
            successAction: deleteFestivalAsync.success.bind(this, festivalId),
            failureAction: deleteFestivalAsync.failure,
        }, {
            causedBy: getType(deleteFestivalAsync.request),
        }))
    }

    if (isActionOf(deleteFestivalAsync.success, action)) {
        const festivalId = action.payload

        dispatch(removeFestivalFromState(festivalId))
    }
}

export default festivalsMiddleware
