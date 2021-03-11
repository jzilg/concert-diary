import { connect, MapStateToProps } from 'react-redux'
import concertSelector from '../../redux/selectors/concertSelector'
import { loadConcert, saveConcert } from '../../redux/actions/app/concerts.actions'
import { Props } from './EditConcert'

type StateProps = Pick<Props, 'concert'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    concert: concertSelector(state),
})

type DispatchProps = Pick<Props, 'loadConcert' | 'saveConcert'>

const mapDispatchToProps: DispatchProps = {
    loadConcert,
    saveConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)
