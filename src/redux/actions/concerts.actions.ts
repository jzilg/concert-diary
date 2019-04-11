import Action from '../interfaces/action.interface'
import Concert from '../../entities/Concert.interface'

export const ADD_CONCERT = 'ADD_CONCERT'

export interface ConcertsAction extends Action {
    payload: {
        concert: Concert
    }
}

export const addConcert = (concert: Concert): ConcertsAction => ({
    type: ADD_CONCERT,
    payload: {
        concert,
    },
})
