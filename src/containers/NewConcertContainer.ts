import { connect } from 'react-redux'
import Concert from '../entities/Concert'
import concertSelector from '../redux/selectors/concertSelector'
import { saveNewConcert } from '../redux/actions/app/concerts.actions'
import NewConcert from '../components/new-concert'

type StateProps = {
    concert: Concert
}

function mapStateToProps(state): StateProps {
    return {
        concert: concertSelector(state),
    }
}

type DispatchProps = {
    saveNewConcert: Function
}

const mapDispatchToProps: DispatchProps = {
    saveNewConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewConcert)
