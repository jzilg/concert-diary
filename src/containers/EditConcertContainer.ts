import { connect } from 'react-redux'
import Concert, { ConcertId } from '../entities/Concert'
import concertSelector from '../redux/selectors/concertSelector'
import concertExistsSelector from '../redux/selectors/concertExistsSelector'
import { fetchConcertsAsync, saveConcert } from '../redux/actions/app/concerts.actions'
import EditConcert from '../components/edit-concert'

type StateProps = {
    concert: Concert
    concertExists: boolean
}

function mapStateToProps(state): StateProps {
    return {
        concert: concertSelector(state),
        concertExists: concertExistsSelector(state),
    }
}

type DispatchProps = {
    loadConcert: (concertId: ConcertId) => void
    saveConcert: Function
}

const mapDispatchToProps: DispatchProps = {
    loadConcert: fetchConcertsAsync.request,
    saveConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditConcert)
