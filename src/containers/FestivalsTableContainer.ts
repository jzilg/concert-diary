import { connect, MapStateToProps } from 'react-redux'
import festivalsSortedByDateSelector from '../redux/selectors/festivalsSortedByDateSelector'
import { fetchFestivalsAsync, deleteFestivalAsync } from '../redux/actions/app/festivals.actions'
import FestivalsTable, { Props } from '../components/festivals-table'

const mapStateToProps: MapStateToProps<Partial<Props>, {}> = (state) => ({
    festivals: festivalsSortedByDateSelector(state),
})

const mapDispatchToProps: Partial<Props> = {
    loadFestivals: fetchFestivalsAsync.request,
    deleteFestival: deleteFestivalAsync.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(FestivalsTable)
