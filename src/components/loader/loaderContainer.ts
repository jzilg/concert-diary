import type { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import isLoadingSelector from '../../redux/selectors/isLoadingSelector'
import type { Props } from './Loader'

type StateProps = Pick<Props, 'isLoading'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    isLoading: isLoadingSelector(state),
})

export default connect(mapStateToProps)
