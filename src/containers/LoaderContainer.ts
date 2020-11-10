import { connect, MapStateToProps } from 'react-redux'
import isLoadingSelector from '../redux/selectors/isLoadingSelector'
import Loader, { Props } from '../components/loader'

const mapStateToProps: MapStateToProps<Partial<Props>, {}> = (state) => ({
    isLoading: isLoadingSelector(state),
})

export default connect(mapStateToProps)(Loader)
