import { isActionOf } from 'typesafe-actions'
import { push } from 'connected-react-router'
import ApiMiddleware from '../../ApiMiddleware'
import {
    saveNewConcert,
    postConcertAsync,
    addConcertToState,
    loadAllConcerts,
    loadAllConcertsAsync,
    loadConcert,
    loadConcertAsync,
    setConcertsState,
    saveConcert,
    putConcertAsync,
    updateConcertOnState,
    deleteConcert,
    deleteConcertAsync,
    removeConcertFromState,
} from '../../actions/app/concerts.actions'
import {
    getSaveNewConcertOptions,
    getLoadAllConcertsOptions,
    getLoadConcertOptions,
    getSaveConcertOptions,
    getDeleteConcertOptions,
} from '../../../api/api'
import concertsSelector from '../../selectors/concertsSelector'
import apiTokenSelector from '../../selectors/apiTokenSelector'
import overwritePayload from '../helper/overwritePayload'

const concertsMiddleware: ApiMiddleware = (apiHandler) => (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store
    const apiToken = apiTokenSelector(getState())

    if (isActionOf(saveNewConcert, action)) {
        apiHandler({
            options: getSaveNewConcertOptions(apiToken, action.payload),
            asyncActions: postConcertAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(postConcertAsync.success, action)) {
        dispatch(addConcertToState(action.payload))
        dispatch(push('/concerts'))
    }

    if (isActionOf(loadAllConcerts, action)) {
        apiHandler({
            options: getLoadAllConcertsOptions(apiToken),
            asyncActions: loadAllConcertsAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(loadAllConcertsAsync.success, action)) {
        dispatch(setConcertsState(action.payload))
    }

    if (isActionOf(loadConcert, action)) {
        apiHandler({
            options: getLoadConcertOptions(apiToken, action.payload),
            asyncActions: loadConcertAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(loadConcertAsync.success, action)) {
        const loadedConcert = action.payload
        const concerts = concertsSelector(getState())
        const concertExists = concerts.some((concert) => concert.id === loadedConcert.id)
        const documentAction = concertExists
            ? updateConcertOnState(loadedConcert)
            : addConcertToState(loadedConcert)

        dispatch(documentAction)
    }

    if (isActionOf(saveConcert, action)) {
        apiHandler({
            options: getSaveConcertOptions(apiToken, action.payload),
            asyncActions: putConcertAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(putConcertAsync.success, action)) {
        dispatch(updateConcertOnState(action.payload))
        dispatch(push('/concerts'))
    }

    if (isActionOf(deleteConcert, action)) {
        apiHandler({
            options: getDeleteConcertOptions(apiToken, action.payload),
            asyncActions: {
                ...deleteConcertAsync,
                success: overwritePayload(deleteConcertAsync.success, action.payload),
            },
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(deleteConcertAsync.success, action)) {
        dispatch(removeConcertFromState(action.payload))
    }
}

export default concertsMiddleware
