import { connect, MapStateToProps } from 'react-redux'
import mostSeenBandsSelector from '../redux/selectors/mostSeenBandsSelector'
import numOfBandsSelector from '../redux/selectors/numOfBandsSelector'
import numOfConcertsSelector from '../redux/selectors/numOfConcertsSelector'
import numOfFestivalsSelector from '../redux/selectors/numOfFestivalsSelector'
import numOfLocationsSelector from '../redux/selectors/numOfLocationsSelector'
import { fetchConcertsAsync } from '../redux/actions/app/concerts.actions'
import { fetchFestivalsAsync } from '../redux/actions/app/festivals.actions'
import Statistics, { Props } from '../components/statistics'

const mapStateToProps: MapStateToProps<Partial<Props>, {}> = (state) => ({
    mostSeenBands: mostSeenBandsSelector(state),
    totalNumOfConcerts: numOfConcertsSelector(state),
    totalNumOfFestivals: numOfFestivalsSelector(state),
    totalNumOfBands: numOfBandsSelector(state),
    totalNumOfLocations: numOfLocationsSelector(state),
})

const mapDispatchToProps: Partial<Props> = {
    loadConcerts: fetchConcertsAsync.request,
    loadFestivals: fetchFestivalsAsync.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)
