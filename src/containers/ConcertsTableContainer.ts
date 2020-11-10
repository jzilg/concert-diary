import { connect, MapStateToProps } from 'react-redux'
import concertsSortedByDateSelector from '../redux/selectors/concertsSortedByDateSelector'
import { fetchConcertsAsync, deleteConcertAsync } from '../redux/actions/app/concerts.actions'
import ConcertsTable, { Props } from '../components/concerts-table'

type StateProps = Pick<Props, 'concerts'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    concerts: concertsSortedByDateSelector(state),
})

type DispatchProps = Pick<Props, 'loadConcerts' | 'deleteConcert'>

const mapDispatchToProps: DispatchProps = {
    loadConcerts: fetchConcertsAsync.request,
    deleteConcert: deleteConcertAsync.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcertsTable)
