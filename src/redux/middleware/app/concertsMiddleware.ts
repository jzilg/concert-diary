import { Store } from 'redux'
import {
    ConcertsAction,
    addConcertsToState,
    addConcertToState,
    updateConcertOnState,
    removeConcertFromState,
    CONCERTS,
    FETCH_CONCERTS,
    POST_CONCERT,
    PUT_CONCERT,
    DELETE_CONCERT,
} from '../../actions/app/concerts.actions'
import { apiRequest } from '../../actions/core/api.actions'

const concertsMiddleware = (store: Store) => next => (action: ConcertsAction) => {
    next(action)
    const { dispatch } = store

    if (action.type === FETCH_CONCERTS) {
        dispatch(apiRequest({
            url: `${process.env.API_URL}/concerts`,
            method: 'GET',
            successAction: addConcertsToState,
        }, CONCERTS))

        return
    }

    if (action.type === POST_CONCERT) {
        const { concert } = action.payload
        next(apiRequest({
            url: `${process.env.API_URL}/concerts`,
            method: 'POST',
            body: JSON.stringify(concert),
            successAction: addConcertToState,
        }, CONCERTS))

        return
    }

    if (action.type === PUT_CONCERT) {
        const { concert } = action.payload
        dispatch(apiRequest({
            url: `${process.env.API_URL}/concerts/${concert.id}`,
            method: 'PUT',
            body: JSON.stringify(concert),
            successAction: updateConcertOnState,
        }, CONCERTS))

        return
    }

    if (action.type === DELETE_CONCERT) {
        const { concertId } = action.payload
        dispatch(apiRequest({
            url: `${process.env.API_URL}/concerts/${concertId}`,
            method: 'DELETE',
            successAction: removeConcertFromState.bind(this, concertId),
        }, CONCERTS))
    }
}

export default concertsMiddleware
