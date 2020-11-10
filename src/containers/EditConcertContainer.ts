import { connect, MapStateToProps } from 'react-redux'
import concertSelector from '../redux/selectors/concertSelector'
import { fetchConcertAsync, saveConcert } from '../redux/actions/app/concerts.actions'
import EditConcert, { Props } from '../components/edit-concert'

type StateProps = Pick<Props, 'concert'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    concert: concertSelector(state),
})

type DispatchProps = Pick<Props, 'loadConcert' | 'saveConcert'>

const mapDispatchToProps: DispatchProps = {
    loadConcert: fetchConcertAsync.request,
    saveConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditConcert)
