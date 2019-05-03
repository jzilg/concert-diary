import Action from '../../interfaces/action.interface'
import Festival, { Festivals, FestivalId } from '../../../entities/Festival.interface'
import API_URL from '../../../constants/api'

const FESTIVALS = '[FESTIVALS]'
const FESTIVAL = '[FESTIVAL]'

export const FETCH_FESTIVALS = `${FESTIVALS} FETCH`
export const ADD_FESTIVALS_TO_STATE = `${FESTIVALS} ADD_TO_STATE`
export const POST_FESTIVAL = `${FESTIVAL} POST`
export const ADD_FESTIVAL_TO_STATE = `${FESTIVAL} ADD_TO_STATE`
export const PUT_FESTIVAL = `${FESTIVAL} PUT`
export const UPDATE_FESTIVAL_ON_STATE = `${FESTIVAL} UPDATE_ON_STATE`
export const DELETE_FESTIVAL = `${FESTIVAL} DELETE`
export const REMOVE_FESTIVAL_FROM_STATE = `${FESTIVAL} REMOVE_FROM_STATE`

export interface FestivalsAction extends Action {
    payload?: {
        festival?: Festival
        festivals?: Festivals
        festivalId?: FestivalId
    }
}

export const addFestivalsToState = (festivals: Festivals): FestivalsAction => ({
    type: ADD_FESTIVALS_TO_STATE,
    feature: FESTIVALS,
    payload: {
        festivals,
    },
})

export const fetchFestivals = (): FestivalsAction => ({
    type: FETCH_FESTIVALS,
    feature: FESTIVALS,
    meta: {
        api: {
            url: `${API_URL}/festivals`,
            method: 'GET',
            successAction: addFestivalsToState,
        },
    },
})

export const addFestivalToState = (festival: Festival): FestivalsAction => ({
    type: ADD_FESTIVAL_TO_STATE,
    feature: FESTIVAL,
    payload: {
        festival,
    },
})

export const postFestival = (festival: Festival): FestivalsAction => ({
    type: POST_FESTIVAL,
    feature: FESTIVAL,
    meta: {
        api: {
            url: `${API_URL}/festivals`,
            method: 'POST',
            body: JSON.stringify(festival),
            successAction: addFestivalToState,
        },
    },
})

export const updateFestivalOnState = (festival: Festival): FestivalsAction => ({
    type: UPDATE_FESTIVAL_ON_STATE,
    feature: FESTIVAL,
    payload: {
        festival,
    },
})

export const putFestival = (festival: Festival): FestivalsAction => ({
    type: PUT_FESTIVAL,
    feature: FESTIVAL,
    meta: {
        api: {
            url: `${API_URL}/festivals/${festival.id}`,
            method: 'PUT',
            body: JSON.stringify(festival),
            successAction: updateFestivalOnState,
        },
    },
})

export const removeFestivalFromState = (festivalId: FestivalId): FestivalsAction => ({
    type: REMOVE_FESTIVAL_FROM_STATE,
    feature: FESTIVAL,
    payload: {
        festivalId,
    },
})

export const deleteFestival = (festivalId: FestivalId): FestivalsAction => ({
    type: DELETE_FESTIVAL,
    feature: FESTIVAL,
    meta: {
        api: {
            url: `${API_URL}/festivals/${festivalId}`,
            method: 'DELETE',
            successAction: removeFestivalFromState.bind(this, festivalId),
        },
    },
})
