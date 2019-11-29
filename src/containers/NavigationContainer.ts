import { connect } from 'react-redux'
import { NavLinks } from '../entities/NavLink'
import navLinksSelector from '../redux/selectors/navLinksSelector'
import Navigation from '../components/navigation'

type StateProps = {
    navLinks: NavLinks
}

function mapStateToProps(state): StateProps {
    return {
        navLinks: navLinksSelector(state),
    }
}

export default connect(mapStateToProps)(Navigation)
