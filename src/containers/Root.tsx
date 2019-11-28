import React, { ReactElement } from 'react'
import { Store } from 'redux'
import { connect, Provider } from 'react-redux'
import State from '../redux/types/State'
import isLoadingSelector from '../redux/selectors/isLoadingSelector'
import Loader from '../components/loader'
import NotificationsList from './NotificationsListContainer'
import Router from '../components/router'

type Props = StateProps & {
    store: Store
}

function Root(props: Props): ReactElement {
    const { store, isLoading } = props
    const loadingElement = isLoading ? <Loader /> : null

    return (
        <Provider store={store}>
            {loadingElement}
            <NotificationsList />
            <Router />
        </Provider>
    )
}

type StateProps = {
    isLoading: boolean
}

const mapStateToProps = (state: State): StateProps => ({
    isLoading: isLoadingSelector(state),
})

export default connect(mapStateToProps)(Root)
