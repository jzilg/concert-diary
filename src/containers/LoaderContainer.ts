import { connect, MapStateToProps } from 'react-redux'
import isLoadingSelector from '../redux/selectors/isLoadingSelector'
import Loader, { Props } from '../components/loader'

type StateProps = Pick<Props, 'isLoading'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    isLoading: isLoadingSelector(state),
})

export default connect(mapStateToProps)(Loader)
