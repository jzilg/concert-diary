import { ConcertsState } from '../reducers/concertsReducer'
import { FestivalsState } from '../reducers/festivalsReducer'
import { LoadingCountState } from '../reducers/loadingCountReducer'
import { NotificationsState } from '../reducers/notificationsReducer'

type State = {
    concerts: ConcertsState
    festivals: FestivalsState
    loadingCount: LoadingCountState
    notifications: NotificationsState
}

/* eslint-disable-next-line no-undef */
export default State
