import { ConcertsState } from '../reducers/concertsReducer'
import { FestivalsState } from '../reducers/festivalsReducer'
import { UiState } from '../reducers/uiReducer'

export default interface State {
    concerts: ConcertsState
    festivals: FestivalsState
    ui: UiState
}
