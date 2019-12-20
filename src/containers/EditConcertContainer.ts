import { connect } from 'react-redux'
import Concert from '../entities/Concert'
import EditConcert from '../components/edit-concert'
import { saveConcert } from '../redux/actions/app/concerts.actions'
import concertSelector from '../redux/selectors/concertSelector'
import concertExistsSelector from '../redux/selectors/concertExistsSelector'

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
    saveConcert: Function
}

const mapDispatchToProps: DispatchProps = {
    saveConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditConcert)
