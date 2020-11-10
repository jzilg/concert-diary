import { connect, MapStateToProps } from 'react-redux'
import concertSelector from '../redux/selectors/concertSelector'
import { fetchConcertAsync, saveConcert } from '../redux/actions/app/concerts.actions'
import EditConcert, { Props } from '../components/edit-concert'

const mapStateToProps: MapStateToProps<Partial<Props>, {}> = (state) => ({
    concert: concertSelector(state),
})

const mapDispatchToProps: Partial<Props> = {
    loadConcert: fetchConcertAsync.request,
    saveConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditConcert)
