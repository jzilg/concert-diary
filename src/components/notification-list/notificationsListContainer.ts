import type { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import notificationsSelector from '../../redux/selectors/notificationsSelector'
import { deleteNotification } from '../../redux/actions/core/notifications.actions'
import type { Props } from './NotificationsList'

type StateProps = Pick<Props, 'notifications'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    notifications: notificationsSelector(state),
})

type DispatchProps = Pick<Props, 'removeNotification'>

const mapDispatchToProps: DispatchProps = {
    removeNotification: deleteNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)
