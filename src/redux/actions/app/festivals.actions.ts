import Action from '../../interfaces/action.interface'
import Festival, { Festivals, FestivalId } from '../../../entities/Festival.interface'
import API_URL from '../../../constants/api'

const FESTIVALS = '[Festivals]'

export const FETCH_FESTIVALS = `${FESTIVALS} [CMD] FETCH`
export const ADD_FESTIVALS_TO_STATE = `${FESTIVALS} [DOC] ADD_TO_STATE`
export const POST_FESTIVAL = `${FESTIVALS} [CMD] POST`
export const ADD_FESTIVAL_TO_STATE = `${FESTIVALS} [DOC] ADD_TO_STATE`
export const PUT_FESTIVAL = `${FESTIVALS} [CMD] PUT`
export const UPDATE_FESTIVAL_ON_STATE = `${FESTIVALS} [DOC] UPDATE_ON_STATE`
export const DELETE_FESTIVAL = `${FESTIVALS} [CMD] DELETE`
export const REMOVE_FESTIVAL_FROM_STATE = `${FESTIVALS} [DOC] REMOVE_FROM_STATE`

interface FestivalsPayload {
    festivals: Festivals
}

interface FestivalPayload {
    festival: Festival
}

interface FestivalIdPayload {
    festivalId: FestivalId
}

interface FestivalsPayloads extends FestivalsPayload, FestivalPayload, FestivalIdPayload {}
export type FestivalsAction = Action<FestivalsPayloads>

export const addFestivalsToState = (festivals: Festivals): Action<FestivalsPayload> => ({
    type: ADD_FESTIVALS_TO_STATE,
    meta: {
        feature: FESTIVALS,
    },
    payload: {
        festivals,
    },
})

export const fetchFestivals = (): Action => ({
    type: FETCH_FESTIVALS,
    meta: {
        feature: FESTIVALS,
        api: {
            url: `${API_URL}/festivals`,
            method: 'GET',
            successAction: addFestivalsToState,
        },
    },
})

export const addFestivalToState = (festival: Festival): Action<FestivalPayload> => ({
    type: ADD_FESTIVAL_TO_STATE,
    meta: {
        feature: FESTIVALS,
    },
    payload: {
        festival,
    },
})

export const postFestival = (festival: Festival): FestivalsAction => ({
    type: POST_FESTIVAL,
    meta: {
        feature: FESTIVALS,
        api: {
            url: `${API_URL}/festivals`,
            method: 'POST',
            body: JSON.stringify(festival),
            successAction: addFestivalToState,
        },
    },
})

export const updateFestivalOnState = (festival: Festival): Action<FestivalPayload> => ({
    type: UPDATE_FESTIVAL_ON_STATE,
    meta: {
        feature: FESTIVALS,
    },
    payload: {
        festival,
    },
})

export const putFestival = (festival: Festival): Action => ({
    type: PUT_FESTIVAL,
    meta: {
        feature: FESTIVALS,
        api: {
            url: `${API_URL}/festivals/${festival.id}`,
            method: 'PUT',
            body: JSON.stringify(festival),
            successAction: updateFestivalOnState,
        },
    },
})

export const removeFestivalFromState = (festivalId: FestivalId): Action<FestivalIdPayload> => ({
    type: REMOVE_FESTIVAL_FROM_STATE,
    meta: {
        feature: FESTIVALS,
    },
    payload: {
        festivalId,
    },
})

export const deleteFestival = (festivalId: FestivalId): Action => ({
    type: DELETE_FESTIVAL,
    meta: {
        feature: FESTIVALS,
        api: {
            url: `${API_URL}/festivals/${festivalId}`,
            method: 'DELETE',
            successAction: removeFestivalFromState.bind(this, festivalId),
        },
    },
})
