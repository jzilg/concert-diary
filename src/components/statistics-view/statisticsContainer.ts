import { connect, MapStateToProps } from 'react-redux'
import { loadStatistics } from '../../redux/actions/app/statistics.actions'
import { Props } from './StatisticsView'
import statisticsSelector from '../../redux/selectors/statisticsSelector'

type StateProps = Pick<Props, 'statistics'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    statistics: statisticsSelector(state),
})

type DispatchProps = Pick<Props, 'loadStatistics'>

const mapDispatchToProps: DispatchProps = {
    loadStatistics,
}

export default connect(mapStateToProps, mapDispatchToProps)
