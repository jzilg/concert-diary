import { connect, MapStateToProps } from 'react-redux'
import navLinksSelector from '../redux/selectors/navLinksSelector'
import Navigation, { Props } from '../components/navigation'

type StateProps = Pick<Props, 'navLinks'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (): StateProps => ({
    navLinks: navLinksSelector(),
})

export default connect(mapStateToProps)(Navigation)
