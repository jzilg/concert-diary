import { connect } from 'react-redux'
import mostSeenBandsSelector, { MostSeenBand } from '../redux/selectors/mostSeenBandsSelector'
import numOfBandsSelector from '../redux/selectors/numOfBandsSelector'
import numOfFestivalsSelector from '../redux/selectors/numOfFestivalsSelector'
import numOfLocationsSelector from '../redux/selectors/numOfLocationsSelector'
import Statistics from '../components/statistics'

type StateProps = {
    mostSeenBands: MostSeenBand[]
    totalNumOfConcerts: number
    totalNumOfFestivals: number
    totalNumOfBands: number
    totalNumOfLocations: number
}

function mapStateToProps(state): StateProps {
    return {
        mostSeenBands: mostSeenBandsSelector(state),
        totalNumOfConcerts: state.concerts.length,
        totalNumOfFestivals: numOfFestivalsSelector(state),
        totalNumOfBands: numOfBandsSelector(state),
        totalNumOfLocations: numOfLocationsSelector(state),
    }
}

export default connect(mapStateToProps)(Statistics)
