import { createSelector } from 'reselect'
import State from '../interfaces/State'
import { UiState } from '../reducers/uiReducer'

const uiSelector = (state: State): UiState => state.ui

function isLoading(ui: UiState): boolean {
    return ui.loaderCount > 0
}

const isLoadingSelector = createSelector(
    uiSelector,
    isLoading,
)

export default isLoadingSelector
