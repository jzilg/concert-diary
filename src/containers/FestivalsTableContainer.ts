import { connect, MapStateToProps } from 'react-redux'
import festivalsSortedByDateSelector from '../redux/selectors/festivalsSortedByDateSelector'
import { fetchFestivalsAsync, deleteFestivalAsync } from '../redux/actions/app/festivals.actions'
import FestivalsTable, { Props } from '../components/festivals-table'

type StateProps = Pick<Props, 'festivals'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    festivals: festivalsSortedByDateSelector(state),
})

type DispatchProps = Pick<Props, 'loadFestivals' | 'deleteFestival'>

const mapDispatchToProps: DispatchProps = {
    loadFestivals: fetchFestivalsAsync.request,
    deleteFestival: deleteFestivalAsync.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(FestivalsTable)
