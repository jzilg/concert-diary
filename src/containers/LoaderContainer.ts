import { connect } from 'react-redux'
import isLoadingSelector from '../redux/selectors/isLoadingSelector'
import Loader from '../components/loader'

type StateProps = {
    isLoading: boolean
}

const mapStateToProps = (state): StateProps => ({
    isLoading: isLoadingSelector(state),
})

export default connect(mapStateToProps)(Loader)
