import type { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import concertsSortedByDateSelector from '../../redux/selectors/concertsSortedByDateSelector'
import { loadAllConcerts, deleteConcert } from '../../redux/actions/app/concerts.actions'
import type { Props } from './ConcertsTable'

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
