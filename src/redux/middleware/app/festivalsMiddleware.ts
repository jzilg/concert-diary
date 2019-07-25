import {
    FestivalsAction,
    addFestivalsToState,
    addFestivalToState,
    updateFestivalOnState,
    removeFestivalFromState,
    FESTIVALS,
    FETCH_FESTIVALS,
    POST_FESTIVAL,
    PUT_FESTIVAL,
    DELETE_FESTIVAL,
} from '../../actions/app/festivals.actions'
import { apiRequest } from '../../actions/core/api.actions'
import API_URL from '../../../constants/api'

const festivalsMiddleware = ({ dispatch }) => next => (action: FestivalsAction) => {
    next(action)

    if (action.type === FETCH_FESTIVALS) {
        dispatch(apiRequest({
            url: `${API_URL}/festivals`,
            method: 'GET',
            successAction: addFestivalsToState,
        }, FESTIVALS))

        return
    }

    if (action.type === POST_FESTIVAL) {
        const { festival } = action.payload
        next(apiRequest({
            url: `${API_URL}/festivals`,
            method: 'POST',
            body: JSON.stringify(festival),
            successAction: addFestivalToState,
        }, FESTIVALS))

        return
    }

    if (action.type === PUT_FESTIVAL) {
        const { festival } = action.payload
        dispatch(apiRequest({
            url: `${API_URL}/festivals/${festival.id}`,
            method: 'PUT',
            body: JSON.stringify(festival),
            successAction: updateFestivalOnState,
        }, FESTIVALS))

        return
    }

    if (action.type === DELETE_FESTIVAL) {
        const { festivalId } = action.payload
        dispatch(apiRequest({
            url: `${API_URL}/festivals/${festivalId}`,
            method: 'DELETE',
            successAction: removeFestivalFromState.bind(this, festivalId),
        }, FESTIVALS))
    }
}

export default festivalsMiddleware
