import State from '../types/State'
import Notification from '../../entities/Notification'

function notificationsSelector(state: State): Notification[] {
    return state.ui.notifications
}

export default notificationsSelector
