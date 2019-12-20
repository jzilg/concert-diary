import { connect } from 'react-redux'
import mostSeenBandsSelector, { MostSeenBand } from '../redux/selectors/mostSeenBandsSelector'
import numOfBandsSelector from '../redux/selectors/numOfBandsSelector'
import numOfConcertsSelector from '../redux/selectors/numOfConcertsSelector'
import numOfFestivalsSelector from '../redux/selectors/numOfFestivalsSelector'
import numOfLocationsSelector from '../redux/selectors/numOfLocationsSelector'
import { fetchConcertsAsync } from '../redux/actions/app/concerts.actions'
import { fetchFestivalsAsync } from '../redux/actions/app/festivals.actions'
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
        totalNumOfConcerts: numOfConcertsSelector(state),
        totalNumOfFestivals: numOfFestivalsSelector(state),
        totalNumOfBands: numOfBandsSelector(state),
        totalNumOfLocations: numOfLocationsSelector(state),
    }
}

type DispatchProps = {
    loadConcerts: Function
    loadFestivals: Function
}

const mapDispatchToProps: DispatchProps = {
    loadConcerts: fetchConcertsAsync.request,
    loadFestivals: fetchFestivalsAsync.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)
