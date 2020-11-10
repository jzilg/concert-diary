import { connect, MapStateToProps } from 'react-redux'
import navLinksSelector from '../redux/selectors/navLinksSelector'
import Navigation, { Props } from '../components/navigation'

const mapStateToProps: MapStateToProps<Partial<Props>, {}> = () => ({
    navLinks: navLinksSelector(),
})

export default connect(mapStateToProps)(Navigation)
