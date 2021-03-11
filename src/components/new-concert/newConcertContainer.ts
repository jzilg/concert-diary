import { connect, MapStateToProps } from 'react-redux'
import concertSelector from '../../redux/selectors/concertSelector'
import { saveNewConcert } from '../../redux/actions/app/concerts.actions'
import { Props } from './NewConcert'

type StateProps = Pick<Props, 'concert'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    concert: concertSelector(state),
})

type DispatchProps = Pick<Props, 'saveNewConcert'>

const mapDispatchToProps: DispatchProps = {
    saveNewConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)
