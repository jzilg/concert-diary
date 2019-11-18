import Action from '../../interfaces/Action'
import Festival, { Festivals, FestivalId } from '../../../entities/Festival'

export const FESTIVALS = '[Festivals]'

export const FETCH_FESTIVALS = `${FESTIVALS} [CMD] FETCH`
export const ADD_FESTIVALS_TO_STATE = `${FESTIVALS} [DOC] ADD_TO_STATE`
export const POST_FESTIVAL = `${FESTIVALS} [CMD] POST`
export const PUT_FESTIVAL = `${FESTIVALS} [CMD] PUT`
export const UPDATE_FESTIVAL_ON_STATE = `${FESTIVALS} [DOC] UPDATE_ON_STATE`
export const DELETE_FESTIVAL = `${FESTIVALS} [CMD] DELETE`
export const REMOVE_FESTIVAL_FROM_STATE = `${FESTIVALS} [DOC] REMOVE_FROM_STATE`

type FestivalsPayload = {
    festivals: Festivals
}

type FestivalPayload = {
    festival: Festival
}

type FestivalIdPayload = {
    festivalId: FestivalId
}

type FestivalsPayloads = FestivalsPayload & FestivalPayload &FestivalIdPayload
export type FestivalsAction = Action<FestivalsPayloads>

export function addFestivalsToState(festivals: Festivals): Action<FestivalsPayload> {
    return {
        type: ADD_FESTIVALS_TO_STATE,
        payload: {
            festivals,
        },
    }
}

export function fetchFestivals(): Action {
    return {
        type: FETCH_FESTIVALS,
    }
}

export function addFestivalToState(festival: Festival): Action<FestivalsPayload> {
    return addFestivalsToState([festival])
}

export function postFestival(festival: Festival): Action<FestivalPayload> {
    return {
        type: POST_FESTIVAL,
        payload: {
            festival,
        },
    }
}

export function updateFestivalOnState(festival: Festival): Action<FestivalPayload> {
    return {
        type: UPDATE_FESTIVAL_ON_STATE,
        payload: {
            festival,
        },
    }
}

export function putFestival(festival: Festival): Action<FestivalPayload> {
    return {
        type: PUT_FESTIVAL,
        payload: {
            festival,
        },
    }
}

export function removeFestivalFromState(festivalId: FestivalId): Action<FestivalIdPayload> {
    return {
        type: REMOVE_FESTIVAL_FROM_STATE,
        payload: {
            festivalId,
        },
    }
}

export function deleteFestival(festivalId: FestivalId): Action<FestivalIdPayload> {
    return {
        type: DELETE_FESTIVAL,
        payload: {
            festivalId,
        },
    }
}
