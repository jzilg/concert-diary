import { connect } from 'react-redux'
import Concert, { ConcertId } from '../entities/Concert'
import concertSelector from '../redux/selectors/concertSelector'
import { fetchConcertAsync, saveConcert } from '../redux/actions/app/concerts.actions'
import EditConcert from '../components/edit-concert'

type StateProps = {
    concert: Concert
}

function mapStateToProps(state): StateProps {
    return {
        concert: concertSelector(state),
    }
}

type DispatchProps = {
    loadConcert: (concertId: ConcertId) => void
    saveConcert: Function
}

const mapDispatchToProps: DispatchProps = {
    loadConcert: fetchConcertAsync.request,
    saveConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditConcert)
