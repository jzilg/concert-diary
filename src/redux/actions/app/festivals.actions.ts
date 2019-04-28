import Action from '../../interfaces/action.interface'
import Festival, { Festivals, FestivalId } from '../../../entities/Festival.interface'
import API_URL from '../../../constants/api'

export const FETCH_FESTIVALS = '[CMD] FETCH_FESTIVALS'
export const ADD_FESTIVALS_TO_STATE = '[STATE] ADD_FESTIVALS_TO_STATE'
export const POST_FESTIVAL = '[CMD] POST_FESTIVAL'
export const ADD_FESTIVAL_TO_STATE = '[STATE] ADD_FESTIVAL_TO_STATE'
export const PUT_FESTIVAL = '[CMD] PUT_FESTIVAL'
export const UPDATE_FESTIVAL_ON_STATE = '[STATE] UPDATE_FESTIVAL_ON_STATE'
export const DELETE_FESTIVAL = '[CMD] DELETE_FESTIVAL'
export const REMOVE_FESTIVAL_FROM_STATE = '[STATE] REMOVE_FESTIVAL_FROM_STATE'

export interface FestivalsAction extends Action {
    payload?: {
        festival?: Festival
        festivals?: Festivals
        festivalId?: FestivalId
    }
}

export const addFestivalsToState = (festivals: Festivals): FestivalsAction => ({
    type: ADD_FESTIVALS_TO_STATE,
    payload: {
        festivals,
    },
})

export const fetchFestivals = (): FestivalsAction => ({
    type: FETCH_FESTIVALS,
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
    payload: {
        festival,
    },
})

export const postFestival = (festival: Festival): FestivalsAction => ({
    type: POST_FESTIVAL,
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
    payload: {
        festival,
    },
})

export const putFestival = (festival: Festival): FestivalsAction => ({
    type: PUT_FESTIVAL,
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
    payload: {
        festivalId,
    },
})

export const deleteFestival = (festivalId: FestivalId): FestivalsAction => ({
    type: DELETE_FESTIVAL,
    meta: {
        api: {
            url: `${API_URL}/festivals/${festivalId}`,
            method: 'DELETE',
            successAction: removeFestivalFromState.bind(this, festivalId),
        },
    },
})
