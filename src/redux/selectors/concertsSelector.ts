import { Concerts } from '../../entities/Concert'
import { State } from '../reducers/rootReducer'

function concertsSelector(state: State): Concerts {
    return Object.values(state.concerts)
}

export default concertsSelector
