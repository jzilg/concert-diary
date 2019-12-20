import { connect } from 'react-redux'
import { Festivals } from '../entities/Festival'
import festivalsSortedByDateSelector from '../redux/selectors/festivalsSortedByDateSelector'
import { fetchFestivalsAsync, deleteFestivalAsync } from '../redux/actions/app/festivals.actions'
import FestivalsTable from '../components/festivals-table'

type StateProps = {
    festivals: Festivals
}

function mapStateToProps(state): StateProps {
    return {
        festivals: festivalsSortedByDateSelector(state),
    }
}

type DispatchProps = {
    loadFestivals: Function
    deleteFestival: Function
}

const mapDispatchToProps: DispatchProps = {
    loadFestivals: fetchFestivalsAsync.request,
    deleteFestival: deleteFestivalAsync.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(FestivalsTable)
