import { connect } from 'react-redux'
import { Notifications } from '../entities/Notification'
import notificationsSelector from '../redux/selectors/notificationsSelector'
import { deleteNotification } from '../redux/actions/core/ui.actions'
import NotificationsList from '../components/notification-list'

type StateProps = {
    notifications: Notifications
}

const mapStateToProps = (state): StateProps => ({
    notifications: notificationsSelector(state),
})

type DispatchProps = {
    removeNotification: Function
}

const mapDispatchToProps: DispatchProps = {
    removeNotification: deleteNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsList)
