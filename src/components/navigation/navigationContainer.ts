import type { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import navLinksSelector from '../../redux/selectors/navLinksSelector'
import type { Props } from './Navigation'
import { logout } from '../../redux/actions/app/auth.actions'

type StateProps = Pick<Props, 'navLinks'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (): StateProps => ({
    navLinks: navLinksSelector(),
})

type DispatchProps = Pick<Props, 'logout'>

const mapDispatchToProps: DispatchProps = {
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)
