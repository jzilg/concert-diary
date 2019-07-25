import Action from '../../interfaces/action.interface'
import Concert, { Concerts, ConcertId } from '../../../entities/Concert.interface'

export const CONCERTS = '[Concerts]'

export const FETCH_CONCERTS = `${CONCERTS} [CMD] FETCH`
export const ADD_CONCERTS_TO_STATE = `${CONCERTS} [DOC] ADD_TO_STATE`
export const POST_CONCERT = `${CONCERTS} [CMD] POST`
export const PUT_CONCERT = `${CONCERTS} [CMD] PUT`
export const UPDATE_CONCERT_ON_STATE = `${CONCERTS} [DOC] UPDATE_ON_STATE`
export const DELETE_CONCERT = `${CONCERTS} [CMD] DELETE`
export const REMOVE_CONCERT_FROM_STATE = `${CONCERTS} [DOC] REMOVE_FROM_STATE`

interface ConcertsPayload {
    concerts: Concerts
}

interface ConcertPayload {
    concert: Concert
}

interface ConcertIdPayload {
    concertId: ConcertId
}

interface ConcertsPayloads extends ConcertsPayload, ConcertPayload, ConcertIdPayload {}
export type ConcertsAction = Action<ConcertsPayloads>

export function addConcertsToState(concerts: Concerts): Action<ConcertsPayload> {
    return {
        type: ADD_CONCERTS_TO_STATE,
        payload: {
            concerts,
        },
    }
}

export function fetchConcerts(): Action {
    return {
        type: FETCH_CONCERTS,
    }
}

export function addConcertToState(concert: Concert): Action<ConcertsPayload> {
    return addConcertsToState([concert])
}

export function postConcert(concert: Concert): Action<ConcertPayload> {
    return {
        type: POST_CONCERT,
        payload: {
            concert,
        },
    }
}

export function updateConcertOnState(concert: Concert): Action<ConcertPayload> {
    return {
        type: UPDATE_CONCERT_ON_STATE,
        payload: {
            concert,
        },
    }
}

export function putConcert(concert: Concert): Action<ConcertPayload> {
    return {
        type: PUT_CONCERT,
        payload: {
            concert,
        },
    }
}

export function removeConcertFromState(concertId: ConcertId): Action<ConcertIdPayload> {
    return {
        type: REMOVE_CONCERT_FROM_STATE,
        payload: {
            concertId,
        },
    }
}

export function deleteConcert(concertId: ConcertId): Action<ConcertIdPayload> {
    return {
        type: DELETE_CONCERT,
        payload: {
            concertId,
        },
    }
}
