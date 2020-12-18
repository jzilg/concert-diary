import { State } from '../reducers/rootReducer'
import Notification from '../../entities/Notification'

function notificationsSelector(state: State): Notification[] {
    return state.notifications
}

export default notificationsSelector
