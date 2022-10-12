import type { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import concertSelector from '../../redux/selectors/concertSelector'
import { loadConcert, saveConcert } from '../../redux/actions/app/concerts.actions'
import type { Props } from './EditConcert'

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
