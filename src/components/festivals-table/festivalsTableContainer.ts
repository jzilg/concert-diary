import type { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import festivalsSortedByDateSelector from '../../redux/selectors/festivalsSortedByDateSelector'
import { deleteFestival, loadAllFestivals } from '../../redux/actions/app/festivals.actions'
import type { Props } from './FestivalsTable'

type StateProps = Pick<Props, 'festivals'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    festivals: festivalsSortedByDateSelector(state),
})

type DispatchProps = Pick<Props, 'loadAllFestivals' | 'deleteFestival'>

const mapDispatchToProps: DispatchProps = {
    loadAllFestivals,
    deleteFestival,
}

export default connect(mapStateToProps, mapDispatchToProps)
