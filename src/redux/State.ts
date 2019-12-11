import { RouterState } from 'connected-react-router'
import { ConcertsState } from './reducers/concertsReducer'
import { FestivalsState } from './reducers/festivalsReducer'
import { LoadingCountState } from './reducers/loadingCountReducer'
import { NotificationsState } from './reducers/notificationsReducer'
import { WebtokenState } from './reducers/webtokenReducer'

type State = {
    router: RouterState
    concerts: ConcertsState
    festivals: FestivalsState
    loadingCount: LoadingCountState
    notifications: NotificationsState
    webtoken: WebtokenState
}

/* eslint-disable-next-line no-undef */
export default State
