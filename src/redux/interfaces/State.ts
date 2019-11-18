import { ConcertsState } from '../reducers/concertsReducer'
import { FestivalsState } from '../reducers/festivalsReducer'
import { UiState } from '../reducers/uiReducer'

type State = {
    concerts: ConcertsState
    festivals: FestivalsState
    ui: UiState
}

/* eslint-disable-next-line no-undef */
export default State
