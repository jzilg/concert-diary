import { connect, MapStateToProps } from 'react-redux'
import mostSeenBandsSelector from '../redux/selectors/mostSeenBandsSelector'
import numOfBandsSelector from '../redux/selectors/numOfBandsSelector'
import numOfConcertsSelector from '../redux/selectors/numOfConcertsSelector'
import numOfFestivalsSelector from '../redux/selectors/numOfFestivalsSelector'
import numOfLocationsSelector from '../redux/selectors/numOfLocationsSelector'
import { fetchStatisticsAsync } from '../redux/actions/app/statistics.actions'
import Statistics, { Props } from '../components/statistics'

type StateProps = Pick<Props, (
    'mostSeenBands'
    | 'totalNumOfConcerts'
    | 'totalNumOfFestivals'
    | 'totalNumOfBands'
    | 'totalNumOfLocations'
)>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    mostSeenBands: mostSeenBandsSelector(state),
    totalNumOfConcerts: numOfConcertsSelector(state),
    totalNumOfFestivals: numOfFestivalsSelector(state),
    totalNumOfBands: numOfBandsSelector(state),
    totalNumOfLocations: numOfLocationsSelector(state),
})

type DispatchProps = Pick<Props, 'loadStatistics'>

const mapDispatchToProps: DispatchProps = {
    loadStatistics: fetchStatisticsAsync.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)
