import { connect, MapStateToProps } from 'react-redux'
import concertsSortedByDateSelector from '../redux/selectors/concertsSortedByDateSelector'
import { fetchConcertsAsync, deleteConcertAsync } from '../redux/actions/app/concerts.actions'
import ConcertsTable, { Props } from '../components/concerts-table'

const mapStateToProps: MapStateToProps<Partial<Props>, {}> = (state) => ({
    concerts: concertsSortedByDateSelector(state),
})

const mapDispatchToProps: Partial<Props> = {
    loadConcerts: fetchConcertsAsync.request,
    deleteConcert: deleteConcertAsync.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcertsTable)
