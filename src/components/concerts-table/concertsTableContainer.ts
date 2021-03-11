import { connect, MapStateToProps } from 'react-redux'
import concertsSortedByDateSelector from '../../redux/selectors/concertsSortedByDateSelector'
import { loadAllConcerts, deleteConcert } from '../../redux/actions/app/concerts.actions'
import { Props } from './ConcertsTable'

type StateProps = Pick<Props, 'concerts'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    concerts: concertsSortedByDateSelector(state),
})

type DispatchProps = Pick<Props, 'loadAllConcerts' | 'deleteConcert'>

const mapDispatchToProps: DispatchProps = {
    loadAllConcerts,
    deleteConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)
