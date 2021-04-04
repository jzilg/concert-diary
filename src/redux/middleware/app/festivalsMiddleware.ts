import { isActionOf } from 'typesafe-actions'
import { push } from 'connected-react-router'
import { Middleware } from 'redux'
import { ApiHandler } from '../../apiHandler'
import {
    saveNewFestival,
    postFestivalAsync,
    addFestivalToState,
    loadAllFestivals,
    loadAllFestivalsAsync,
    loadFestival,
    loadFestivalAsync,
    setFestivalsState,
    saveFestival,
    putFestivalAsync,
    updateFestivalOnState,
    deleteFestival,
    deleteFestivalAsync,
    removeFestivalFromState,
} from '../../actions/app/festivals.actions'
import {
    getSaveNewFestivalOptions,
    getLoadAllFestivalsOptions,
    getLoadFestivalOptions,
    getSaveFestivalOptions,
    getDeleteFestivalOptions,
} from '../../../api/api'
import festivalsSelector from '../../selectors/festivalsSelector'
import apiTokenSelector from '../../selectors/apiTokenSelector'
import overwritePayload from '../helper/overwritePayload'

const festivalsMiddleware = (apiHandler: ApiHandler, confirm: Window['confirm']): Middleware => (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store
    const apiToken = apiTokenSelector(getState())

    if (isActionOf(saveNewFestival, action)) {
        apiHandler({
            options: getSaveNewFestivalOptions(apiToken, action.payload),
            asyncActions: postFestivalAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(postFestivalAsync.success, action)) {
        dispatch(addFestivalToState(action.payload))
        dispatch(push('/festivals'))
    }

    if (isActionOf(loadAllFestivals, action)) {
        apiHandler({
            options: getLoadAllFestivalsOptions(apiToken),
            asyncActions: loadAllFestivalsAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(loadAllFestivalsAsync.success, action)) {
        dispatch(setFestivalsState(action.payload))
    }

    if (isActionOf(loadFestival, action)) {
        apiHandler({
            options: getLoadFestivalOptions(apiToken, action.payload),
            asyncActions: loadFestivalAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(loadFestivalAsync.success, action)) {
        const loadedFestival = action.payload
        const festivals = festivalsSelector(getState())
        const festivalExists = festivals.some((festival) => festival.id === loadedFestival.id)
        const documentAction = festivalExists
            ? updateFestivalOnState(loadedFestival)
            : addFestivalToState(loadedFestival)

        dispatch(documentAction)
    }

    if (isActionOf(saveFestival, action)) {
        apiHandler({
            options: getSaveFestivalOptions(apiToken, action.payload),
            asyncActions: putFestivalAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(putFestivalAsync.success, action)) {
        dispatch(updateFestivalOnState(action.payload))
        dispatch(push('/festivals'))
    }

    if (isActionOf(deleteFestival, action)) {
        const confirmed = confirm('Are you sure?')

        if (!confirmed) {
            return
        }

        apiHandler({
            options: getDeleteFestivalOptions(apiToken, action.payload),
            asyncActions: {
                ...deleteFestivalAsync,
                success: overwritePayload(deleteFestivalAsync.success, action.payload),
            },
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(deleteFestivalAsync.success, action)) {
        dispatch(removeFestivalFromState(action.payload))
    }
}

export default festivalsMiddleware
