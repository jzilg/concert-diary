import { connect, MapStateToProps } from 'react-redux'
import concertSelector from '../redux/selectors/concertSelector'
import { saveNewConcert } from '../redux/actions/app/concerts.actions'
import NewConcert, { Props } from '../components/new-concert'

const mapStateToProps: MapStateToProps<Partial<Props>, {}> = (state) => ({
    concert: concertSelector(state),
})

const mapDispatchToProps: Partial<Props> = {
    saveNewConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewConcert)
