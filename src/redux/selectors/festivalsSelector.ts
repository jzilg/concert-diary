import { State } from '../reducers/rootReducer'
import { Festivals } from '../../entities/Festival'

function festivalsSelector(state: State): Festivals {
    return Object.values(state.festivals)
}

export default festivalsSelector
