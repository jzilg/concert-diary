import type { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import festivalSelector from '../../redux/selectors/festivalSelector'
import { loadFestival, saveFestival } from '../../redux/actions/app/festivals.actions'
import type { Props } from './EditFestival'

type StateProps = Pick<Props, 'festival'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    festival: festivalSelector(state),
})

type DispatchProps = Pick<Props, 'loadFestival' | 'saveFestival'>

const mapDispatchToProps: DispatchProps = {
    loadFestival,
    saveFestival,
}

export default connect(mapStateToProps, mapDispatchToProps)
