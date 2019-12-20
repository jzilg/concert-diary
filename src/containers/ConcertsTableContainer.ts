import { connect } from 'react-redux'
import { Concerts } from '../entities/Concert'
import concertsSortedByDateSelector from '../redux/selectors/concertsSortedByDateSelector'
import { fetchConcertsAsync, deleteConcertAsync } from '../redux/actions/app/concerts.actions'
import ConcertsTable from '../components/concerts-table'

type StateProps = {
    concerts: Concerts
}

function mapStateToProps(state): StateProps {
    return {
        concerts: concertsSortedByDateSelector(state),
    }
}

type DispatchProps = {
    loadConcerts: Function
    deleteConcert: Function
}

const mapDispatchToProps: DispatchProps = {
    loadConcerts: fetchConcertsAsync.request,
    deleteConcert: deleteConcertAsync.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcertsTable)
